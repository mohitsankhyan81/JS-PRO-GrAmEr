import Link from "next/link"

const page=()=>{
  return (
    <>
      Welcome to my home page
      <Link href="/about">About</Link>
    </>
  )
}

export default page