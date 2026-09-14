import { useState, type KeyboardEvent } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    const command = input.trim();

    if (command === "ls") {
      setOutput((previousOutput) => [
        ...previousOutput,
        "you@ship:~$ ls",
        "firstFile.txt",
        "gems.txt",
      ]);
    } else if (command === "clear") {
      setOutput([]);
    } else if (command !== "") {
      setOutput((previousOutput) => [
        ...previousOutput,
        `you@ship:~$ ${command}`,
        `Command not found: ${command}`,
      ]);
    }

    setInput("");
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