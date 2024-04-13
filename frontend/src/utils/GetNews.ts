import { dryrun } from "@permaweb/aoconnect";
const getNews = async () => {
  // console.log("in")
  const result = await dryrun({
    process: "TwH9Qqw8ChJQJrNUxO9-cKzdryLRC8EH17YecaP7Pyc",
    tags: [{ name: "Action", value: "Get-News" }],
  });

  console.log("TS Result:", result, "\nType of:", typeof result);

  const news = result.Messages[0].Tags;
  console.log("TS news returning:", news, "\nType of:", typeof news);
  if (news.length == 6) {
    return "Error";
  } else {
    return news;
  }
};
export default getNews;
