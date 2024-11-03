import Image from "next/image";
import Header from "../../components/Header"

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center my-[100px]">

        <div className="w-1/2">
          <h1 className="font-bold font-serif text-[40px] w-[496px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="mt-[40px] w-[700px] text-[28px] text-[#A29875] font-serif">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quas, consequuntur consectetur dolorem impedit beatae magni repudiandae provident.</p>
          <button className="mt-[40px] bg-[#A29875] w-[288px] h-[58px] font-serif text-white text-[30px]">Explore Now</button>
        </div>
        <div>
          <Image
            src={'/images/hero-side.svg'} alt="Hero-image" width={462} height={647}
          />
        </div>

      </div>



    </div>
  )
}