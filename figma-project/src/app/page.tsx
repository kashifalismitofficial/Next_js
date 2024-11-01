import Header from "../../components/Header"
import Image from "next/image";
import "./globals.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center my-[150px] ">
        {/* Firt Section Start */}
        <div className="w-1/2 flex-col item-center">
          <h1 className="font-inter font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="text-[32px] w-[571px] text-[#4C4C4C]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industrys
            standard</p>
          <button className="bg-black text-white text-[28px] mt-[20px] p-2 h-[66px] w-[237px]">Contact Us</button>
        </div>
        {/* second section start */}
        <div>
          <Image src={'/images/heroimg.png'} alt="hero image"
            width={502}
            height={465} />

        </div>
      </div>

    </div>
  )
}