export default function Sale() {
  return (
    <div className="bg-black sm:bg-[url(/last.png)] bg-cover w-[100%] h-[100%] sm:h-[448px] flex items-center justify-center py-5 sm:py-0">
      <div className="w-[100%] h-[100%] text-center  justify-items-center content-center text-white ">
        <div className="text-[72px] font-thin">
          Big Summer <span className="text-[72px] font-bold">Sale</span>
        </div>
        <div className="text-[16px]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </div>
        <div>
          <button className="w-[191px] h-[56px] border-2 border-solid border-white rounded mt-[30px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
