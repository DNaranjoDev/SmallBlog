import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaLaptop} from "react-icons/fa"


export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="text-white/90 no-underline hover:text-white">David Naranjo</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
                <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/david-naranjo-garcia-16341b267/">
                    <FaLinkedin />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://github.com/DNaranjoDev">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="https://twitter.com/OkamiDave">
                    <FaTwitter />
                </Link>
            </div>
        </div>
    </nav>
  )
}
