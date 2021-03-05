import React, { useReducer } from "react";
import { strigaAction, setColor } from "./color.action";
import { colorReducer, initialState } from "./color.reducer";

export const Color = () => {
  const [color, dispatch] = useReducer(colorReducer, initialState);

  const schimbaCuloarea = () => {
    // console.log("gigi")
    const random = Math.round(Math.random() * 255);
    dispatch(strigaAction(random));
  };

  const handleChange = e => {
    const {value, name} = e.target
    
    dispatch(setColor(value, name));
  }

  return (
    <div>
      <button onClick={schimbaCuloarea}>test</button>
      <div style={{
        backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, 1)`,
        padding: "2rem",
      }}>
        red: {color.red}
      </div>
      <input type="range" value={color.red} min="0" max="255" name="red" id="" onChange={handleChange}/>
      <div>
        blue: {color.blue}
      </div>
      <input type="range" value={color.blue} min="0" max="255" name="blue" id="" onChange={handleChange}/>
      <div>
        green: {color.green}
      </div>
      <input type="range" value={color.green} min="0" max="255" name="green" id="" onChange={handleChange}/>
    </div>
  );
};
