const NewsCard = ({ item }: any) => {
  return (
    <div className="bg-[#ffffff] rounded-[9px] px-[9px] py-[6px] flex flex-col items-start justify-center">
      <h4 className="text-[21px] font-semibold">{item.heading}</h4>
      <p className="text-[15px] font-light">{item.para}</p>
    </div>
  );
};

export default NewsCard;
