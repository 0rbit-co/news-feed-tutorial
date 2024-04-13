const CardLoader = () => {
  return (
    <div className="bg-white p-2 sm:p-4 sm:h-fit rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-[4.5px] md:w-[360px] sm:w-[180px] w-[210px]">
          <div className="bg-gray-200 w-full animate-pulse h-[30px] rounded-md mb-[3px]"></div>
          <div className="bg-gray-200 w-full animate-pulse h-[6px] rounded-2xl"></div>
          <div className="bg-gray-200 w-full animate-pulse h-[6px] rounded-2xl"></div>
          <div className="bg-gray-200 w-full animate-pulse h-[6px] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
