import { useState } from "react";
import "./App.css";


type AppState = {
  name: string;
  children: { id: number; name: string }[];
};

function App() {
  const [info] = useState<AppState>({
    name: "Dat",
    children: [
      { id: 1, name: "Thanh Tung" },
      { id: 2, name: "Tung Lam" },
    ],
  });
  return (
    <>
      <Hello name="Son" age={20} info={info} />
      <Sum />
    </>
  );
}

export default App;