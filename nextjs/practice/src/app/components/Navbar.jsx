import Link from "next/link"

const Navbar=()=>{
    return (
        <div className="flex justify-between items-center px-6 py-3 bg-blue-500 gap-3" >
            <div className="text-4xl text-yellow-400 space-y-30">Coders</div>
            <div className="space-x-5 gap-6">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/product'>Product</Link>
                <Link href='/login'>Login</Link>
                <Link href='/create'>Create</Link>
            </div>
        </div>
    )
}

export default Navbar