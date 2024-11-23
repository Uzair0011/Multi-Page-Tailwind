type Idata = {
  title: string;
  url: string;
  color: string;
  textColor: string;
  productColor: string;
  buttonColor: string;
};
const data: Idata[] = [
  {
    title:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    url: "05a",
    color: "bg-white",
    textColor: "black",
    productColor: "black",
    buttonColor: "black",
  },
  {
    title:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    url: "02a",
    color: "bg-[#f9f9f9]",
    textColor: "black",
    productColor: "black",
    buttonColor: "black",
  },
  {
    title:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    url: "04a",
    color: "bg-[#eaeaea]",
    textColor: "black",
    productColor: "black",
    buttonColor: "black",
  },
  {
    title:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    url: "03a",
    color: "bg-[#2c2c2c]",
    textColor: "white",
    productColor: "white",
    buttonColor: "black",
  },
];
import Image from "next/image";
export default function Four() {
  return (
    <div>
      <div className="w-[100%] h-[100%] flex justify-center flex-wrap">
        {data.map((Idata, index) => (

          <div key={index} className={`${Idata.color} w-[300px] h-[540px] mt-5`}>
            {/* Image */}
            <div className="w-[100%] h-[276px]">
              <Image
                className="w-[100%]"
                src={`/${Idata.url}.png`}
                alt="image"
                width={500}
                height={500}
              />
            </div>
            <div className="p-[20px] text-center sm:text-start">
              <h2
                className={`text-${Idata.productColor}  py-[20px] text-[25px] font-bold`}
              >
                Popular Products
              </h2>
              <p
                className={`text-${Idata.textColor} w-[250px] text-[14px] py-[15px]`}
              >
                {Idata.title}
              </p>
              <button className="w-[191px] h-[56px] border-[1px] border-solid border-black rounded bg-white    hover:border-[3px]">
                <b className={`text-${Idata.buttonColor}`}>Shop Now</b>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
