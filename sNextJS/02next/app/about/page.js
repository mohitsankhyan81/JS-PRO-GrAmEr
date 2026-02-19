import Link from "next/link"

const page=()=>{
    return(
        <>
        <h1>About service</h1>
        <Link href="/">Home</Link>
        <Link href="/service">Service</Link>
        </>
    )
}

export default page