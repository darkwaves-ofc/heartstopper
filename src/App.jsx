import Particle from "./components/Particle";
import Content from "./Content";
function App() {
  return (
    <div className="font-raleway relative">
      <Content />
      {/* <Particle /> */}
      <img
        src={"/bg.gif"}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </div>
  );
}

export default App;
