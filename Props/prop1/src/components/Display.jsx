const Display=({data})=>{
  return(
    <>
      {data.map((user)=>(
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.city}</h1>
          <h2>{user.address.city}</h2>
        </div>
      ))}
    </>
  )
}

export default Display;