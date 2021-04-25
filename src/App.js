import React, { useState } from "react";
import './App.css';
import Grid from "./components/Grid";
import { CirclePicker } from "react-color";

function makeArray(size) {
  return Array(size).fill(Array(size).fill("#61DAF9"));
}

function App() {

  // store the selected color in state
  const [selected, setSelected] = useState("");

  // store the array of colors in state
  const [colors, setColors] = useState(makeArray(5));

  const update = (x, y) => {
    const newArray = [...colors].map((row, index) => {
        alert(index);
        alert( y);
        alert(index === y);
      if (index === y) {
        row.splice(x, 1, selected);
      }
      return row;
    });
    setColors(newArray);
  };

  return (
      <div className="App">
        <Grid colors={colors} update={update} />
        <CirclePicker
            color={selected}
            onChangeComplete={color => setSelected(color.hex)}
        />
      </div>
  );
}

export default App;
