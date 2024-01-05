import { useState } from "react";

const Deposit = () => {
  const [saintInput, setSaintInput] = useState();
  const [typeInput, setTypeInput] = useState();
  const [referenceInput, setReferenceInput] = useState();
  const [contentInput, setContentInput] = useState();
  function post() {
    fetch("http://localhost:3001/depo", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        saint: saintInput,
        type: typeInput,
        reference: referenceInput,
        content: contentInput,
      }),
    });
  }
  return (
    <div>
      <input
        placeholder="Saint"
        onChange={(e) => {
          setSaintInput(e.target.value);
        }}
      ></input>
      <select
        onChange={(e) => {
          setTypeInput(e.target.value);
        }}
      >
        <option>Quote</option>
        <option>Work</option>
        <option>Story</option>
      </select>
      {typeInput !== "Quote" ? (
        <input
          placeholder="Reference"
          onChange={(e) => {
            setReferenceInput(e.target.value);
          }}
        ></input>
      ) : null}
      <textarea
        placeholder="Content"
        onChange={(e) => {
          setContentInput(e.target.value);
        }}
      ></textarea>
      <button onClick={post}>Deposit</button>
    </div>
  );
};

export default Deposit;
