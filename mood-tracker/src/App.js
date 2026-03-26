import React, { useState } from "react";
function App() {
  const [mood, setMood] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mood Tracker</h1>
      <button onClick={() => setMood("Happy")}>😊 Happy</button>
      <button onClick={() => setMood("Normal")}>😐 Normal</button>
      <button onClick={() => setMood("Sad")}>😔 Sad</button>
      <h2>Your mood today: {mood}</h2>
    </div>
  );
}
export default App;

