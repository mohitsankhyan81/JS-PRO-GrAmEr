const page=async({params})=>{
    console.log(await params);
    const {username}=await params;
    return (
        <>
            <h1>Blog 1</h1>
            <h1>{username}</h1>
        </>
    )
}

export default page