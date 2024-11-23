import Image from "next/image";

type Idata = {
  title: string;
  price: number;
  url: string;
};
const data: Idata[] = [
  {
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 900,
    url: "1",
  },
  {
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    url: "c2",
  },
  {
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    url: "w3",
  },
  {
    title: "AirPods Max Silver Starlight Aluminium",
    price: 549,
    url: "h4",
  },
  {
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    url: "w5",
  },
  {
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    url: "m6",
  },
  {
    title: "Galaxy Buds FE Graphite  Silver Starlight",
    price: 99.99,
    url: "e7",
  },
  {
    title: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
    price: 398,
    url: "m8",
  },
];

export default function New() {
  return (
    <div className="overflow-hidden w-[100%] h-[100%]">
      {/* text Arrival */}
      <div className="w-[100%] text-center sm:w-[1120px] flex flex-col sm:flex-row  gap-[20px] py-[60px] pl-0 sm:pl-[20px]">
        <p>
          <u>
            <b>New Arrival</b>
          </u>
        </p>
        <p>Bestseller</p>
        <p>Featured Products</p>
      </div>
      {/* box */}
      <div className="w-[100%] h-[100%] justify-center flex  sm:justify-between flex-wrap content-between">
        {data.map((Idata, index) => (
          <div
            key={index}
            className="w-[260px] h-[432px] bg-myColor justify-center text-center p-[24px] mb-[10px] "
          >
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
