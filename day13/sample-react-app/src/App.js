import React, { useState, useEffect} from "react";


function App() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("useEffect");
      document.title = `You clicked ${count} times`;
    }
  )

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={
        () => {
          console.log("click");
          setCount(count + 1);
        }
      }>Click me
      </button>  
    </>
  )
}
export default App;