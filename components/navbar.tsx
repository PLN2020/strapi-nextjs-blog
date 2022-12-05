import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between">
            <div>
                <Link href='/'>Eat.Lena</Link>
            </div>
            
            <div className="flex">
                <div className="flex space-x-4">
                    <Link href=''>About</Link>
                    <Link href=''>Portfolio</Link>
                    <Link href=''>Blog</Link>
                    <Link href=''>Contact</Link>        
                </div>

                <div>
                    Socials
                </div>
            </div>
        </nav>
    )
}