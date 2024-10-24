
import Image from "next/image"; 
import Logo from "next/image/2.png"
const Header = () => {
    return (
        <header className="bg-black p-3 text-white font-mono flex ">
            <Logo></Logo>
            <ul className="flex justify-center gap-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
        </header>

    )
}
export default Header;