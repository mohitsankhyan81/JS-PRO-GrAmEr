const App = () => {
  function greet(name:string):string{
    return "hello ".concat(name+"!");
  }

  const message=greet("Mohit")
  console.log(message)

  const data:string="My name is mohit";
  console.log(data);
  return (
    <div>
      Hello
    </div>
  )
}

export default App
