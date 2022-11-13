import Link from 'next/link'

const Navbar = () => {
    return (

        <nav className="text-2xl font-medium flex justify-around ">
            <div>
                <a href="/">mbifenzi</a>
            </div>
            <ul className="flex gap-12 ">
                <Link href={"/"}> <li>Home</li> </Link>
                <Link href={"#about"}> <li>About</li> </Link>
                <Link href={"#projects"}> <li>Projects</li> </Link>
                <Link href={"#contact"}> <li>Contact</li> </Link>
            </ul>
        </nav>
    )
}

export default Navbar