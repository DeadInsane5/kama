import Card from "./card/card";
import "./App.css"

function App() {
  return(
    <>
    <div className="cardContainer">
      <Card title="Missionary" desc="Classic for a reason—deep, intense, and straight to the heart (and other places)" img="src\assets\missionary-dark.png"></Card>
      <Card title="Cowgirl" desc="Sit back, relax, and let me take you for a wild ride" img="src\assets\cowgirl-dark.png"></Card>
      <Card title="Doggy Style" desc="Hands on the wheel, baby—I'm driving this one home" img="src\assets\doggy-dark.png"></Card>
      <Card title="Table Top" desc="Dinner’s served, but dessert’s about to get messy" img="src\assets\table-dark.png"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    </>
  );
}

export default App