const UserList=({data})=>{
    return (
        <>
        {data.map((e)=>(
            <li key={e.id}>
                <h4>Name: {e.name} <br/> UserName: {e.username} <br/> Email: {e.email}<br/>Address: {e.address.city} <br/> CompanyName: {e.company.name}</h4>
            </li>
        ))}
        </>
    )
}

export default UserList;