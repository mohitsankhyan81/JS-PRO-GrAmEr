export default async function Page({ params }){
    const {username}=await params;

    return(
    <div>
        username:- {username}
        <h1>This is the danamic router</h1>
    </div>
    )
}
