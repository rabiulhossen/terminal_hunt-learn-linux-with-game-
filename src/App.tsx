import { useState, type KeyboardEvent } from "react";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);



  const handleCommand = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "ArrowUp") {
    if (history.length === 0) {
      return;
    }

    const newIndex =
      historyIndex === -1
        ? history.length - 1
        : Math.max(historyIndex - 1, 0);

    setHistoryIndex(newIndex);
    setInput(history[newIndex]);

    return;
  }

  if (event.key === "ArrowDown") {
    if (historyIndex === -1) {
      return;
    }

    const newIndex = historyIndex + 1;

    if (newIndex >= history.length) {
      setHistoryIndex(-1);
      setInput("");
      return;
    }

    setHistoryIndex(newIndex);
    setInput(history[newIndex]);

    return;
  }

  if (event.key !== "Enter") {
    return;
  }

  const command = input.trim();


    if (command !== "") {
  setHistory((previousHistory) => [
    ...previousHistory,
    command,
  ]);
}

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

  if (command !== "") {
    setHistory((previousHistory) => [
      ...previousHistory,
      command,
    ]);
  }

  setHistoryIndex(-1);
  setInput("");
};


// Render the terminal interface





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