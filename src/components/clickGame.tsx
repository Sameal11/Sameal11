import { useState, useEffect } from "react";

export default function ClickGame() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    if (time === 0) {
      setPlaying(false);
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, playing]);

  const startGame = () => {
    setScore(0);
    setTime(15);
    setPlaying(true);
    randomize();
  };

  const randomize = () => {
    setPosition({
      x: Math.random() * 80,
      y: Math.random() * 80,
    });
  };

  const handleClick = () => {
    if (!playing) return;
    setScore(score + 1);
    randomize();
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl text-white max-w-md mx-auto text-center">

      <h2 className="text-2xl font-bold mb-4">🎯 Click Game</h2>

      <div className="flex justify-around mb-4">
        <p>Score: <b>{score}</b></p>
        <p>Time: <b>{time}s</b></p>
      </div>

      {!playing && (
        <button
          onClick={startGame}
          className="px-4 py-2 bg-blue-500 rounded mb-4"
        >
          Start Game
        </button>
      )}

      <div className="relative h-64 bg-black/50 rounded-lg overflow-hidden border border-gray-700">
        {playing && (
          <button
            onClick={handleClick}
            style={{
              position: "absolute",
              top: `${position.y}%`,
              left: `${position.x}%`,
            }}
            className="w-10 h-10 bg-green-400 rounded-full animate-pulse"
          />
        )}
      </div>

      {!playing && time === 0 && (
        <p className="mt-4 text-green-400">
          Game Over! Final Score: {score}
        </p>
      )}
    </div>
  );
}
