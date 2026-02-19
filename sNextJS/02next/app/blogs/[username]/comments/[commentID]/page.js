const page=async({params})=>{
    const paramsObj=await params;
    const {username,commentID}=paramsObj;
    console.log(username,commentID)
    return (
        <>
            Comments NO. <i>{commentID}</i> on <b>{username}</b>
        </>
    )
}

export default page