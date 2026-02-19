import Link from "next/link"

const service=()=>{
    return (
        <>
            <h1>All Service</h1>
            <Link href="/service/appdev">App Development</Link>
            <Link href="/service/seo">Web Development</Link>
            <Link href="/service/webdev">Seo Development</Link>
        </>
    )
}

export default service