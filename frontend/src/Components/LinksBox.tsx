const LinksBox = () => {
  return (
    <div className="bg-[#ffffff] rounded-[12px] px-[12px] py-[9px]">
      <h4>Useful Links</h4>
      <div className="grid grid-cols-2 gap-6 text-start">
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-start self-start"
        >
          Documentation
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-center self-center"
        >
          Github Repository
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-center self-center"
        >
          NewsFeed Frontend Blog
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-center self-center"
        >
          NewsFeed Contract Blog
        </a>
      </div>
    </div>
  );
};

export default LinksBox;
