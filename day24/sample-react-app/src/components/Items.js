import { useState, useEffect } from "react";
import Item from "./Item";

export default function Items(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items").then((res)=>{
      return res.json()
    })
    .then((json_response) => {
      setData(json_response);
    });
  })

  return (
    <table>
      <td></td>
      <td>Task</td>
      <td>Due</td>
      <td></td>
      {data.map(
        (item) => {
          return <Item key={item.key} item={item}/>
        }
      )}
    </table>
  );
}