import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./app/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer greetings={"Welcome!!"} />
    </div>
  );
}

export default App;
