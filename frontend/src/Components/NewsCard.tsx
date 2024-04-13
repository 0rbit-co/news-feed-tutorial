const NewsCard = ({ item }: any) => {
  return (
    <a
      href={item.link}
      className="bg-[#ffffff] rounded-[9px] px-[9px] py-[6px] flex flex-col items-start justify-center text-start
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-none hover:bg-[#ffb53e3d] hover:cursor-pointer"
    >
      <h4 className="text-[16.5px] font-[Medium]">{item.heading}</h4>
      <p className="text-[13.5px] leading-[18px] font-[Light]">{item.para}</p>
    </a>
  );
};

export default NewsCard;
