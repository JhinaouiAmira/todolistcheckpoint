import AddTask from "./components/AddTask";
import "./App.css";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
