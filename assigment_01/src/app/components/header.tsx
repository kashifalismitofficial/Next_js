import Link from "next/link";

export default function Header(){
    return(
    <div className="flex justify-center gap-10 mb-[20px] bg-slate-900 text-white p-[30px]">
        <Link href=''>Home</Link>
        <Link href='./about'>About</Link>
        <Link href='./contactus'>Contact Us</Link>
        <Link href='./service'>Service</Link>
    </div>)
}