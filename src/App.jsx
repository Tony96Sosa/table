import "./App.css";
import Tabla from "./Tabla";
import ScrollableTable from "./ScrollableTable";

function App() {
  const data = [
    ["Header1", "Header2", "Header3", "Header4"],
    ["Row1Col1", "Row1Col2", "Row1Col3", "Row1Col4"],
    ["Row2Col1", "Row2Col2", "Row2Col3", "Row2Col4"],
    ["Row3Col1", "Row3Col2", "Row3Col3", "Row3Col4"],
  ];

  return (
    <>
      <Tabla />
      <h1>Scrollable Table Example</h1>
      <ScrollableTable data={data} />
    </>
  );
}

export default App;
