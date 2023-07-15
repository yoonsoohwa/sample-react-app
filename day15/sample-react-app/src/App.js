import {useState} from "react";

function App() {
  const [click1, toggle1] = useToggle(false);
  const [click2, toggle2] = useToggle(false);
  const [click3, toggle3] = useToggle(false);
  const [click4, toggle4] = useToggle(false);
  const [click5, toggle5] = useToggle(false);

  return (
    <>
      <button onClick={toggle1}>{click1 ? "Hello" : "GoodBye"}</button>
      <button onClick={toggle2}>{click2 ? "Hello" : "GoodBye"}</button>
      <button onClick={toggle3}>{click3 ? "Hello" : "GoodBye"}</button>
      <button onClick={toggle4}>{click4 ? "Hello" : "GoodBye"}</button>
      <button onClick={toggle5}>{click5 ? "Hello" : "GoodBye"}</button>
    </>
  );
}

const useToggle = (defaultValue = false) => {
  const [ click, setClick ] = useState(defaultValue);
  const toggle = () => setClick((click) => !click);

  return [click, toggle];
}

export default App;