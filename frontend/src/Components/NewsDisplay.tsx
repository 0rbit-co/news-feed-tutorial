import { useState } from "react";
import CardLoader from "./CardLoader";
import Loader from "./Loader";
import NewsCard from "./NewsCard";
import getNews from "../utils/GetNews";

const NewsDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsArr, setNewsArr] = useState([]);
  const [message, setMessage] = useState("Click to get News with 0rbit");
  const fetchNewsHandler = async () => {
    setIsLoading(true);
    try {
      // FETCH HERE
      const news = await getNews();
      // console.log("TSX news returning:", news, "\nType of:", typeof news);
      if (news == "Error") {
        setMessage("Error Occured. Please Contact Support on Discord");
        setIsLoading(false);
        return "Error";
      } else {
        setMessage("Latest News, with 0rbit");
        setNewsArr(news);
      }
      // news.map((item: any, key: any) => {
      //   if (key > 5) {
      //     console.log("TSX map:", item, "\nType of:", typeof item);
      //     console.log("Key:", key);
      //   }
      // });
      // console.log("data at front", data);
    } catch (error) {
      setMessage("Error Occured. Please Contact Support on Discord");
      console.error();
      error;
    }
    setIsLoading(false);
  };
  return (
    <section
      className="max-w-[1200px] sm:mx-12 max-h-[50%] overflow-y-scroll
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#f1f1f1] rounded-[12px] sm:px-[18px] px-[12px] py-[15px] flex flex-col items-center justify-center gap-4"
    >
      <div className="sm:max-h-[390px] max-h-[450px] grid sm:grid-cols-2 gap-[9px] overflow-y-scroll">
        {isLoading ? (
          <>
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </>
        ) : (
          newsArr.map((item: any, key: any) => {
            if (key > 5) {
              return <NewsCard item={item} />;
            }
          })
        )}
      </div>
      <h5 className="text-[12px]">{message}</h5>
      <button
        onClick={fetchNewsHandler}
        className="bg-[#000000] px-[60px] py-[6px] rounded-[6px] text-[18px] font-extralight text-[#ffffff] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-none"
      >
        {isLoading ? <Loader /> : "Get Latest News"}
      </button>
    </section>
  );
};

export default NewsDisplay;
