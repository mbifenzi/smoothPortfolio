import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (

            <div className='w-full absolute top-10'>
            <nav className="text-l flex justify-start bg-orange-100">
                <div>
                    <ul className="flex gap-4 justify-center items-center ">
                        <Link href={"/"}> <li className='gap-22'>
                            <Image src="/assets/logos/mb.png" alt="logo"  width={60} height={50}/></li> 
                        </Link>
                        <Link href={"#about"}> <li>About</li> </Link>
                        <Link href={"#projects"}> <li>Projects</li> </Link>
                        <Link href={"#contact"}> <li>Contact</li> </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar