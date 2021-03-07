import React, { useState } from "react";

export const Math = () => {
  const [sum, setSum] = useState();
  const [value, setValue] = useState({
    val1: '',
    val2: ''
  })

  const ceva = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  const doSum = (val1, val2) => {
    setSum(+value.val1 + +value.val2);
  };

  return (
    <div>
      {sum && <div>
        Sum = {sum}
      </div>}
      <input type="text" onChange={ceva} value={value.val1} name="val1"/>
      <input type="text" onChange={ceva} value={value.val2} name="val2"/>
      <button onClick={doSum}>Do sum</button>
    </div>
  );
};
