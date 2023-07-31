
import "./App.css";
import CanvasModel from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <main className= 'transition-all ease-in h-[100svh] ' >
        <Home /> 
        <CanvasModel />
        <Customizer/>

        </main>

    </>
  );
}

export default App;
