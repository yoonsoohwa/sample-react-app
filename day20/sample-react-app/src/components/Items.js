import Item from "./Item";

export default function Items(){
  let item = {status: "todo", task: "커피마시기", due: "20200730"};

  return (
    <table>
      <td></td>
      <td>Task</td>
      <td>Due</td>
      <td></td>
      <Item item={item}/>
      <Item item={item}/>
      <Item item={item}/>
    </table>
  );
}