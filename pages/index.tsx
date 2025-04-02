import { useState } from "react";

const currentPlayers = [
  "Nikola Jokic", "Luka Doncic", "Giannis Antetokounmpo", "Shai Gilgeous-Alexander", "Joel Embiid",
  "Jayson Tatum", "Stephen Curry", "LeBron James", "Kevin Durant", "Devin Booker"
  // Add the rest...
];

const allTimePlayers = [
  "Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Magic Johnson", "Larry Bird",
  "Tim Duncan", "Shaquille O'Neal", "Kobe Bryant", "Hakeem Olajuwon", "Kevin Durant"
  // Add the rest...
];

export default function Home() {
  const [playerPool, setPlayerPool] = useState("current");
  const [randomPlayer, setRandomPlayer] = useState("");
  const [judgeIndex, setJudgeIndex] = useState(0);
  const [players, setPlayers] = useState(["Alice", "Bob", "Charlie"]);

  const generatePlayer = () => {
    const pool = playerPool === "current" ? currentPlayers : allTimePlayers;
    const drawn = pool[Math.floor(Math.random() * pool.length)];
    setRandomPlayer(drawn);
  };

  const nextJudge = () => {
    setJudgeIndex((prev) => (prev + 1) % players.length);
    setRandomPlayer("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">NBA Matchmaker</h1>
      <div className="mb-4 border p-4 rounded">
        <p className="mb-2">Current Judge: <strong>{players[judgeIndex]}</strong></p>
        <p>Player Pool: <strong>{playerPool === "current" ? "2024-25 Season" : "All-Time"}</strong></p>
        <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded" onClick={() => setPlayerPool(playerPool === "current" ? "allTime" : "current")}>
          Switch Pool
        </button>
      </div>

      <div className="mb-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={generatePlayer}>Draw Random Player</button>
        {randomPlayer && (
          <div className="mt-4 text-xl font-semibold">🏀 Matchmake for: {randomPlayer}</div>
        )}
      </div>

      <div className="mb-6">
        <button className="px-4 py-2 bg-gray-700 text-white rounded" onClick={nextJudge}>Next Judge</button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Players:</h2>
        <ul className="space-y-1">
          {players.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
