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

NEWS = NEWS or {
    {
        ["title"] = "WhatsApp Business could charge users for linking more than four devices - XDA Developers",
        ["description"] =
        "WhatsApp Business could potentially start charging users who want to link more than four devices to the same account in a future update.",
        ["url"] = "https://www.xda-developers.com/whatsapp-business-could-charge-users/"
    },
    {
        ["title"] =
        "Google Messages causing severe battery drain and overheating? Here’s a temporary fix - XDA Developers",
        ["description"] =
        "A bug in Google Messages is causing severe battery drain and overheating on some devices. Here's a temporary fix while you wait for Google to push an update.",
        ["url"] = "https://www.xda-developers.com/google-messages-bug-battery-drain-overheating-fix/"
    },
    {
        ["title"] = "Redmi 10 Power with 6,000mAh Battery Launched in India: Check Price and Specs - The Quint",
        ["description"] =
        "Redmi 10 Power Price in India: Redmi has launched its new smartphone Redmi 10 Power in India. The smartphone was launched along with Redmi 10A, on Wednesday, 20 April in India",
        ["url"] =
        "https://www.thequint.com/tech-and-auto/gadgets/redmi-10-power-launch-date-price-in-india-specs-specifications"
    },
    {
        ["title"] = "Alienware Doubles Down on AMD, Launches New Ryzen Laptops and Desktop - Gizmodo",
        ["description"] = "The premium Alienware m15 R7 and m17 R5 highlight four new Ryzen-powered systems.",
        ["url"] = "https://gizmodo.com/alienware-m15-r7-m17-r5-dell-g15-aurora-ryzen-editio-1848819822"
    },
    {
        ["title"] = "Apple MagSafe Battery Pack Will Now Charge Your iPhone Faster: Here’s How - News18",
        ["description"] =
        "Apple is offering its new firmware update for the MagSafe accessory that promises to give you faster charging for the compatible iPhone models.",
        ["url"] =
        "https://www.news18.com/news/tech/apple-magsafe-battery-pack-will-now-charge-your-iphone-faster-heres-how-5026621.html"
    },
    {
        ["title"] = "Google to kill call-recording apps on Play Store on May 11 - GSMArena.com news - GSMArena.com",
        ["description"] = "System apps with native call-recording functionality remain unaffected.",
        ["url"] = "https://www.gsmarena.com/google_to_kill_callrecording_apps_on_play_store_on_may_11-news-54039.php"
    },
    {
        ["title"] = "OnePlus Nord 2T moniker confirmed, camera details leaked ahead of India launch - 91mobiles",
        ["description"] =
        "The OnePlus Nord 2T India launch may take place soon as the moniker has been spotted on the TDRA certification. The OnePlus Nord 2T's camera details have also been leaked. Here are the expected specifications of the device.",
        ["url"] =
        "https://www.91mobiles.com/hub/oneplus-nord-2t-moniker-confirmed-camera-details-leaked-ahead-of-india-launch/"
    },
    {
        ["title"] =
        "iPhones with full-screen display? Apple may introduce under-display camera and Face ID in 2024 - Economic Times",
        ["description"] = "The iPhone 16 is likely to be the first Apple device to skip the camera notch.",
        ["url"] =
        "https://economictimes.indiatimes.com/magazines/panache/iphones-with-full-screen-display-apple-may-introduce-under-display-camera-and-face-id-in-2024/articleshow/90978007.cms"
    },
    {
        ["title"] = "Garena Free Fire Max Codes For April 21: Here's How To Redeem Them For Free Rewards - ABP Live",
        ["description"] =
        "Garena Free Fire Max redeem codes are 12-digit codes that are region-specific and can be used by players to gain an edge over rivals in every round of the battle royale game.",
        ["url"] =
        "https://news.abplive.com/technology/garena-free-fire-max-redeem-codes-date-heres-how-to-get-redeem-free-rewards-codes-1527539"
    }
}

RECEIVE = RECEIVE or {}

-- Function to get news from API
Handlers.add(
    "GetNews",
    Handlers.utils.hasMatchingTag("Action", "Get-News"),
    function(msg)
        print(RECEIVE)
        Handlers.utils.reply(RECEIVE)(msg)
    end
)

Handlers.add(
    "ReceiveNews",
    Handlers.utils.hasMatchingTag("Action", "Receive-News"),
    function(msg)
        RECEIVE = {}
        if type(NEWS) == "table" and #NEWS > 0 then
            for _, news in ipairs(NEWS) do
                if type(news) == "table" and news["title"] and news["description"] and news["url"] then
                    table.insert(RECEIVE, news)
                else
                    table.insert(LOGS, "Skipping invalid news item: " .. tostring(news))
                end
            end
        else
            table.insert(LOGS, "NEWS table is empty or has an unexpected structure.")
        end
        local reply_data = json.encode(RECEIVE)
        Handlers.utils.reply(reply_data)(msg)
    end
)

Handlers.add(
    "FetchNewsFeed",
    Handlers.utils.hasMatchingTag("Action", "Cron"),
    function()
        local url = BASE_URL;
        ao.send({
            Target = _0RBIT,
            Action = "Get-Real-Data",
            Url = url
        })
    end
)