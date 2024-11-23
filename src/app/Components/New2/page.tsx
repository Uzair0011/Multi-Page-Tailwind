import Image from "next/image";

type Idata = {
  title: string;
  price: number;
  url: any;
};
const data: Idata[] = [
  {
    title: "Apple iPhone 14 Pro Max 128GB Gold",
    price: 900,
    url: "n1",
  },
  {
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    url: "h4",
  },
  {
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    url: "w3",
  },
  {
    title: "AirPods Max Silver Starlight Aluminium ",
    price: 549,
    url: "n4",
  },
];

export default function New2() {
  return (
    <div className="overflow-hidden w-[100%] h-[100%]">
      {/* text Arrival */}
      <div className="w-[100%] text-center sm:w-[1120px] flex flex-col sm:flex-row  gap-[20px] py-[60px] pl-0 sm:pl-[20px]">
        <p>
          <u>
            <b>Discounts up to -50%</b>
          </u>
        </p>
      </div>
      {/* box */}
      <div className="w-[100%] h-[100%] justify-center flex  sm:justify-between flex-wrap content-between">
        {data.map((Idata) => (
          <div className="w-[260px] h-[432px] bg-myColor justify-center text-center p-[24px] mb-[10px] ">
            <div className="w-[225px] h-[32px] flex justify-end">
              <Image
                // className="imgSize1"
                src="/heart.png"
                alt="pic"
                width={30}
                height={20}
              />
            </div>
            <div className="w-[160px] h-[160px] justify-self-center">
              <Image
                src={`/${Idata.url}.png`}
                alt="itemsAll"
                width={160}
                height={160}
              />
            </div>

            <h5 className="text-[16px] pt-[17px]">
              <b>{Idata.title}</b>
            </h5>
            <h4 className="text-[24px] font-bold pt-[10px]">${Idata.price}</h4>
            <div className="pt-[15px]">
              <button className="w-[188px] h-[48px] bg-black text-white rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
