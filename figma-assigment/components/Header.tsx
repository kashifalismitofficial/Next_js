import Image from "next/image";

export default function Header() {
    return (
        <div className="pl-[30px] w-[1920px] h-[134px] bg-[#A29875] flex items-center">
            <div >
                <Image  src={'/images/Logo.png'} alt="No-image" width={300} height={94} />
            </div>

        </div>
    )
}