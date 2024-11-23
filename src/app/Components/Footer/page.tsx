import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-[100%] h-auto bg-black text-white items-center py-11 px-11">
      <div className=" flex flex-col sm:flex-row flex-wrap justify-between">
        <div className="text-[16px] text-center sm:text-start">
          <div className="w-auto sm:w-[400px] h-auto sm:h-[256px] ml-50px pb-11">
            <h2 className="text-[16px]">
              <b>Cyber</b>
            </h2>
            <p className="text-center sm:text-start  sm:w-[320px] text-[14px]">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
        </div>

        <div className="text-center sm:text-start text-[16px] pb-11">
          <h2 className=" text-[16px]">
            <b>Services</b>
          </h2>
          <div className="">
            <ul>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>

        <div className="text-center sm:text-start text-[16px] pb-11">
          <h2 className="">
            <b>Assistance to the buyer</b>
          </h2>
          <div className="">
            <ul className="">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row items-center gap-11 ">
        <div>
          <Image src="/twitter.png" alt="logo" width={25} height={25} />
        </div>
        <div>
          <Image src="/fb.png" alt="logo" width={25} height={25} />
        </div>
        <div>
          <Image src="/tiktok.png" alt="logo" width={25} height={25} />
        </div>
        <div>
          <Image src="/insta.png" alt="logo" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
