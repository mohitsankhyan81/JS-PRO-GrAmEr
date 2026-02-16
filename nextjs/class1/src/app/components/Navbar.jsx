import Link from 'next/link'

const Navbar=()=>{
    return(
        <div className="flex bg-blue-400 text-xl justify-between itmes-center px-6 py-3">
            <h1>Data travel</h1>
            <div className="flex gap-6">
                <Link href='/'>Home</Link>
                <Link href='/about'>about</Link>
                <Link href='/product'>product</Link>
            </div>
        </div>
    )
}

export default Navbar