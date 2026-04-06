const App = () => {

  // let x:unknown='Hello';
  // console.log((x as number).length);

  let x:number=34;
  console.log(x.toString());
  console.log(typeof String(x));
  return (
    <div>
      Hello
    </div>
  )
}

export default App
