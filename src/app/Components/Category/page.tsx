import Image from "next/image";
export default function Category() {
  return (
    <div>
      <div className="w-[100%] h-auto  sm:h-[352px] bg-white pt-[88px] items-center pb-11">
        <div className="w-[100%] h-[32px] flex items-center justify-between px-[50px]">
          <p className="text-[24px]">Browse By Category</p>
          <div className="flex w-[20px] gap-[20px]">
            <Image
              className="arrow"
              src="/arrowLeft.png"
              alt="arrow"
              width={20}
              height={20}
            />
            <Image
              className="arrow2"
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="pt-[44px] flex flex-wrap gap-2 justify-around">
          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center ">
            <div className="">
              <Image src="/Phones.png" alt="phones" width={48} height={48} />
            </div>
            Phones
          </div>

          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center ">
            <div className="">
              <Image src="/Watches.png" alt="phones" width={48} height={48} />
            </div>
            Smart Watches
          </div>

          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center  ">
            <div className="">
              <Image src="/Cameras.png" alt="phones" width={48} height={48} />
            </div>
            Cameras
          </div>

          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center ">
            <div className="">
              <Image
                src="/Headphones.png"
                alt="phones"
                width={48}
                height={48}
              />
            </div>
            Headphones
          </div>

          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center ">
            <div className="">
              <Image src="/Computers.png" alt="phones" width={48} height={48} />
            </div>
            Computers
          </div>

          <div className=" bg-[#ededed] w-[160px] h-[128px]  flex flex-col justify-center items-center ">
            <div className="">
              <Image src="/Gaming.png" alt="phones" width={48} height={48} />
            </div>
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
}
