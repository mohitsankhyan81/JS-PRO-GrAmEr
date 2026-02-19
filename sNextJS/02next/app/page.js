import Link from "next/link";

const page=()=>{
  return(
    <>
      <h1>Technical Agency</h1>
      <br/>
      <Link href="/">Home</Link> <Link href="/about">About</Link> <Link href="/service">Service</Link> <Link href="/file">Files</Link>
    </>
  )
}

export default page;