import { useState, useRef } from "react";


export default function Player() {
  const setName = useRef();
  const [enteredPlayerName, setEnteredPlayerName ] = useState(null);

  function handleClick(){
    setEnteredPlayerName(setName.current.value);
    setName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={setName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
