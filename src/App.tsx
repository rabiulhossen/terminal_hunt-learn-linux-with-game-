function App() {
  return (
    <main className="terminal">
      <h1>TREASURE.SYS</h1>

      <div className="terminal-output">
        <p>Welcome, deckhand.</p>
        <p>System initialized.</p>
        <p>Type "help" for available commands.</p>
      </div>

      <div className="prompt">
        <span>you@ship:~$</span>
        <span>_</span>
      </div>
    </main>
  );
}

export default App;