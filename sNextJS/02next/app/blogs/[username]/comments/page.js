const page=async({params})=>{
    const paramsObj=await params;
    const {username}=paramsObj;
    console.log(username )
    return (
        <>
            all Comments on <b>{username}</b> page
        </>
    )
}

export default page;