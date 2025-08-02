function Scoreboard() {
  const players = [
    { name: "Player 1", score: 50 },
    { name: "Player 2", score: 30 },
    { name: "Player 3", score: 20 },
    { name: "Player 4", score: 10 },
  ];

  const lowScorers = players.filter(player => player.score < 30);

  return (
    <div>
      <h2>Scoreboard</h2>
      <h3>All Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
      <h3>Low Scorers</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scoreboard;