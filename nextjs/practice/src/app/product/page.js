import Navbar from "../components/Navbar"
import Image from "next/image"
import Link from "next/link"

const page=()=>{
    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center h-screen space-x-4">
                <div>
                    <Image src="/manage1.jpg" height={100} width={234} alt=""/>
                    <Link href='/product/maleProducts' className="block mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Male Products</Link>
                </div>   
                <div>
                    <Image src="/manage2.jpg" height={100} width={234} alt=""/>
                    <Link href='/product/femaleproducts ' className="block mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">Female Products</Link>
                </div>
            </div>
        </>
    )
}
export default page