import {useState, type KeyboardEvent} from "react";

function App() {

  const [input,setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    if (event.key !== "Enter"){
   return;
    }
    if(input === "ls") {
      setOutput(["firstFile.txt", "gems.txt"])
    }
  };
  return (
    <main className="terminal">
      <h1>TREASURE.SYS</h1>

      <div className="terminal-output">
        <p>Welcome, deckhand.</p>
        <p>System initialized.</p>
        <p>Type "help" for available commands.</p>

        {output.map((line, index) => (
  <p key={index}>{line}</p>
))}
      </div>

      <div className="prompt">
        <span>you@ship:~$</span>

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
      <p>Current command: {input}</p>
    </main>
  );
}

export default App;