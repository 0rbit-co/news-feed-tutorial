import { useState } from "react";
import CardLoader from "./CardLoader";
import Loader from "./Loader";
import NewsCard from "./NewsCard";

const NewsDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchNewsHandler = () => {
    setIsLoading(true);
    try {
      // FETCH HERE
    } catch (error) {
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
          news.map((item: any) => {
            return <NewsCard item={item} />;
          })
        )}
      </div>

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

// const news = "";
const news = [
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
];
