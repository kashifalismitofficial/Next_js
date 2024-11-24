import Image from "next/image"


export default function Header() {
    return (
        <div>
            <div className="">
                <div className="flex justify-between p-4">
                    <Image
                        src={'/images/Logo.png'} alt="Hero-image" width={130.6} height={41}
                    />
                    <Image
                        className=" lg:none"
                        src={'/images/hamburger.png'} alt="Hero-image" width={48} height={48}
                    />
                </div>

            </div>
        </div>
    )
}