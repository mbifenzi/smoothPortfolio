import Link from 'next/link'

const Navbar = () => {
    return (

        <nav className="text-l flex justify-between ">
            <div className='flex gap-2 font-bold'>
                <a href="/">mbifenzi</a>
            </div>
            <div>
            <ul className="flex gap-4 ">
                <Link href={"/"}> <li>Home</li> </Link>
                <Link href={"#about"}> <li>About</li> </Link>
                <Link href={"#projects"}> <li>Projects</li> </Link>
                <Link href={"#contact"}> <li>Contact</li> </Link>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar