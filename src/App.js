import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./app/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Padel 05"} />

    </div>
  );
}

export default App;
