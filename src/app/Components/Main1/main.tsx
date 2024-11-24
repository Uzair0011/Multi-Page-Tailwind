import Image from "next/image";
export default function Main() {
  return (
    <div className="overflow-hidden w-[100%] h-[100%]  bg-[#211c24] sm:flex justify-around items-center  px-11">
      <div className="text-white">
        <p className="text-[12px] sm:text-[25px] font-bold pt-11">
          Pro.Beyond.
        </p>
        <p className="w-[500px] text-[45px] sm:text-[96px] font-thin">
          IPhone 14 <span className="font-medium">Pro</span>
        </p>
        <p className="text-[11px] sm:text-[18px] ">
          Created to change everything for the better. For everyone
        </p>
        <button className="w-[90px] h-[30px] sm:w-[191px] sm:h-[50px] border-2 border-solid border-white rounded mt-[20px] ">
          Shop Now
        </button>
      </div>
      <div className="">
        <Image
          className="object-cover"
          src="/iphone.png"
          alt="iphone"
          width={420}
          height={0}
        />
      </div>
    </div>
  );
}
