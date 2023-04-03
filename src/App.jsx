import { useState } from "react";
import "./App.css";

import MyNews from "./NewsMain";

function App() {
  const [count, setCount] = useState(0);

  return <MyNews />;
}

export default App;
