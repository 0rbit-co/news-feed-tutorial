import NewsCard from "./NewsCard";

const NewsDisplay = () => {
  return (
    <section className="bg-[#f1f1f1] max-w-[75%] rounded-[12px] px-[18px] py-[15px] flex flex-col items-center justify-center gap-6">
      <div className="grid grid-cols-2 gap-6">
        {news.map((item) => {
          return <NewsCard item={item} />;
        })}
      </div>
      <button className="bg-[#000000] px-[60px] py-[6px] rounded-[6px] text-[21px] font-extralight text-[#ffffff]">
        Get Latest News
      </button>
    </section>
  );
};

export default NewsDisplay;

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
];
