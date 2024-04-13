const LinksBox = () => {
  return (
    <div
      className="bg-[#ffffff] rounded-[6px] px-[12px] py-[9px]
    border-[1px] border-[#00000000]
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <h4 className="text-[13.5px] font-[Medium] pb-[9px]">Useful Links</h4>
      <div className="grid grid-cols-2 gap-6 text-start tet-[12px] font-[Medium]">
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-start self-start
          hover:tracking-wide hover:underline"
        >
          Documentation
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-start self-center hover:tracking-wide hover:underline"
        >
          Github Repository
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-start self-center hover:tracking-wide hover:underline"
        >
          NewsFeed Frontend Blog
        </a>
        <a
          href=""
          target="_blank"
          className="text-[#F49F38] text-[12px] place-self-start self-center hover:tracking-wide hover:underline"
        >
          NewsFeed Contract Blog
        </a>
      </div>
    </div>
  );
};

export default LinksBox;
