import Image from "next/image";
export default function MacPage() {
  return (
    <div className="w-auto h-auto   flex flex-col sm:flex sm:flex-row">
      {/* left side */}
      <div>
        <div>
          <div className="w-[100%] h-auto sm:h-[300px] none sm:flex bg-white">
            <div className="w-[100%] sm:w-[50%] h-auto overflow-hidden content-center">
              <Image
                // className="imgg"
                src="/PlayStation.png"
                alt="playstation"
                width={1500}
                height={0}
              />
            </div>

            <div className="w-[100%} sm:w-[50%] px-[15px] py-11 sm:p-0  text-center sm:text-start content-center ">
              <h2 className="text-[41px]">Playstation 5</h2>
              <p className="text-[14px]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="bg-blue-900 w-[100%]   sm:w-[50%] content-center">
            <div className="w-[100%] h-auto bg-white flex content-center  ">
              <div className="w-[50%]  h-auto">
                <Image
                  src="/airpod.png"
                  alt="playstation"
                  width={100}
                  height={0}
                />
              </div>
              <div className=" pl-[20px] w-[50%] content-center">
                <h2 className="w-[20px] text-[29px] ">Apple AirPods Max</h2>
                <p className="w-[40px] text-[14px]">
                  Computational audio. Listen, it&apos;s powerful
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="  w-[100%]  bg-black sm:w-[50%] content-center">
            {/* second */}
            <div className=" h-auto  flex content-center text-white ">
              <div className="w-[50%]  h-auto content-center">
                <Image
                  src="/vision.png"
                  alt="playstation"
                  width={100}
                  height={0}
                />
              </div>
              <div className=" pl-[20px] w-[50%] content-center">
                <h2 className="w-[20px] text-[29px] ">Apple Vision Pro</h2>
                <p className="w-[40px] text-[14px]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] sm:w-[50%] h-auto bg-[#ededed] flex   flex-col sm:flex-row items-center justify-between pl-20px">
        <div className="w-[100%] h-auto pl-5">
          <h2 className="text-[64px] ">Macbook Air</h2>
          <p className="w-[100%} sm:w-[370px] pb-[20px] sm:max-w-min-content">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>

          <button className="w-[191px] h-[56px] border-2 border-solid border-black rounded">
            Shop Now
          </button>
        </div>
        <div className="w-[100%] sm:w-[300px]  sm:h-auto py-5 sm:pt-0  sm:content-center">
          <Image
            // className="img4"
            src="/MacBook.png"
            alt="playstation"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
