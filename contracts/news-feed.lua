-- Create a news array
-- get handler using _0RBIT
-- receive data feed will push the news to NEWs array
-- cron will regularly fetch data

-- fetch news only for one category.

local json = require("json")

-- processId of the 0rbit process
_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"

-- Base URL for news API
BASE_URL = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"

LOGS = LOGS or {}

NEWS = NEWS or {}

-- Function to get news from API
Handlers.add(
    "GetNews",
    Handlers.utils.hasMatchingTag("Action", "Get-News"),
    function()
        ao.send({
            Target = _0RBIT,
            Action = "Get-Real-Data",
            Url = BASE_URL
        })
    end
)

Handlers.add(
    "ReceiveNews",
    Handlers.utils.hasMatchingTag("Action", "Receive-News"),
    function(msg)
        local res = json.decode(msg.Data)
        if res.status == "ok" then
            for _, article in ipairs(res.articles) do
                local news_item = {
                    title = article.title,
                    description = article.description,
                    publishedAt = article.publishedAt
                }
                table.insert(NEWS, news_item)
            end
        else
            -- Handle error case
            table.insert(
                LOGS,
                {
                    From = msg.From,
                    Tag = "Receive-News",
                    Data = {
                        Error = res.message or "Unknown error"
                    }
                }
            )

            if msg.From == ao.id then
                ao.send({
                    Target = msg.From,
                    Tags = {
                        ["Message-Id"] = msg.Id,
                        Error = res.message or "Unknown error"
                    }
                })
            end
        end
    end
)

-- Cron function to update news feed periodically
Handlers.add(
    "CronTick",
    Handlers.utils.hasMatchingTag("Action", "Cron"),
    function()
        ao.send({
            Target = _0RBIT,
            Action = "Get-Real-Data",
            Url = BASE_URL
        })
    end
)