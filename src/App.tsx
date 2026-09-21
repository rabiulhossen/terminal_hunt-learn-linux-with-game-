import { useState, type KeyboardEvent } from "react";
import {getNode, filesystem, isDirectory} from "./game/filesystem";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([
  "home",
  "you",
]);

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
} else if (command === "pwd") {
  setOutput((previousOutput) => [
    ...previousOutput,
    `you@ship:~$ ${command}`,
    "/" + currentPath.join("/"),
  ]);
} 
else if (command.startsWith("cd ")) {
  const destination = command.slice(3).trim();

  if (destination === "..") {
    const newPath = currentPath.slice(0, -1);
    setCurrentPath(newPath);
  } else {
    const newPath = [...currentPath, destination];

    if (isDirectory(newPath)) {
      setCurrentPath(newPath);
    }
  }
}

else if (command === "cd") {
  setCurrentPath(["home", "you"]);
}


else if (command === "clear") {
  setOutput([]);
} else if (command !== "") {
  setOutput((previousOutput) => [
    ...previousOutput,
    `you@ship:~$ ${command}`,
    `Command not found: ${command}`,
  ]);

  
}

else if (command.startsWith("cd ")) {
  const destination = command.slice(3).trim();

  const newPath = [...currentPath, destination];

console.log(newPath);
}

 

    setInput("");
  };
console.log(filesystem);

const promptPath =
  currentPath.length === 2 &&
  currentPath[0] === "home" &&
  currentPath[1] === "you"
    ? "~"
    : "/" + currentPath.join("/");
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
       <span>you@ship:{promptPath}$</span>

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