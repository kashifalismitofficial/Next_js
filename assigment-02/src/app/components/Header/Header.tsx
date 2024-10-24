
import Image from "next/image"; 
import logo from "../assets/Logo.png"
const Header = () => {
    return (
        <header className="bg-black p-3 text-white font-mono flex ">
            <h2>Logo</h2>
            <ul className="flex justify-center gap-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
        </header>

    )
}
export default Header;