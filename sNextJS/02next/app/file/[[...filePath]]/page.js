const page = async ({ params }) => {
    const { filePath } =await params;
    console.log(filePath)
    return (
        <>
            <h1>file /{filePath?.join("/")}</h1>
        </>
    )
}

export default page;
