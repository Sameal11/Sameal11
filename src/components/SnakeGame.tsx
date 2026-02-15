import { useState, useEffect, useCallback } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export default function SnakeGame() {
    const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
    const [food, setFood] = useState<Point>({ x: 15, y: 5 });
    const [direction, setDirection] = useState<Direction>('RIGHT');
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const generateFood = useCallback((): Point => {
        return {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
    }, []);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood(generateFood());
        setDirection('RIGHT');
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
    };

    const checkCollision = (head: Point) => {
        // Wall collision
        if (
            head.x < 0 ||
            head.x >= GRID_SIZE ||
            head.y < 0 ||
            head.y >= GRID_SIZE
        ) {
            return true;
        }
        // Self collision
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) return true;
        }
        return false;
    };

    const moveSnake = useCallback(() => {
        if (gameOver) return;

        setSnake((prevSnake) => {
            const head = { ...prevSnake[0] };

            switch (direction) {
                case 'UP': head.y -= 1; break;
                case 'DOWN': head.y += 1; break;
                case 'LEFT': head.x -= 1; break;
                case 'RIGHT': head.x += 1; break;
            }

            if (checkCollision(head)) {
                setGameOver(true);
                setIsPlaying(false);
                if (score > highScore) setHighScore(score);
                return prevSnake;
            }

            const newSnake = [head, ...prevSnake];

            // Eat food
            if (head.x === food.x && head.y === food.y) {
                setScore((s) => s + 1);
                setFood(generateFood());
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [direction, food, gameOver, score, highScore, generateFood]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
                case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
                case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
                case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction]);

    useEffect(() => {
        if (isPlaying && !gameOver) {
            const interval = setInterval(moveSnake, Math.max(50, INITIAL_SPEED - score * 2));
            return () => clearInterval(interval);
        }
    }, [isPlaying, gameOver, moveSnake, score]);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-black border border-white/10 rounded-3xl max-w-md mx-auto shadow-2xl">
            <div className="flex justify-between w-full mb-6 items-center">
                <div>
                    <h3 className="text-2xl font-bold font-snpro tracking-tight">RETRO SNAKE</h3>
                    <p className="text-xs text-gray-500 font-mono">Use Arrow Keys</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-2 text-yellow-500 font-mono text-sm">
                        <Trophy className="w-4 h-4" />
                        <span>HI: {highScore}</span>
                    </div>
                    <div className="text-3xl font-bold font-mono text-white">{score}</div>
                </div>
            </div>

            <div
                className="relative bg-white/5 rounded-xl overflow-hidden border border-white/10"
                style={{
                    width: GRID_SIZE * CELL_SIZE,
                    height: GRID_SIZE * CELL_SIZE
                }}
            >
                {/* Snake */}
                {snake.map((segment, i) => (
                    <div
                        key={i}
                        className="absolute rounded-sm transition-all duration-100"
                        style={{
                            left: segment.x * CELL_SIZE,
                            top: segment.y * CELL_SIZE,
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            backgroundColor: i === 0 ? '#10b981' : '#34d399', // Head is darker green
                            zIndex: 2,
                            boxShadow: i === 0 ? '0 0 10px #10b981' : 'none'
                        }}
                    />
                ))}

                {/* Food */}
                <div
                    className="absolute rounded-full animate-pulse"
                    style={{
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        backgroundColor: '#ef4444',
                        zIndex: 1,
                        boxShadow: '0 0 15px #ef4444'
                    }}
                />

                {/* Game Over Overlay */}
                {gameOver && (
                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
                        <p className="text-3xl font-bold text-red-500 font-snpro mb-2">GAME OVER</p>
                        <p className="text-gray-400 mb-6 font-mono">Score: {score}</p>
                        <button
                            onClick={resetGame}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:scale-105 transition-transform"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Try Again
                        </button>
                    </div>
                )}

                {/* Start Overlay */}
                {!isPlaying && !gameOver && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 backdrop-blur-sm">
                        <button
                            onClick={resetGame}
                            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            <Play className="w-6 h-6 fill-black" />
                            START GAME
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Controls (Visible only on small screens) */}
            <div className="mt-6 grid grid-cols-3 gap-2 md:hidden">
                <div></div>
                <button className="p-4 bg-white/10 rounded-lg active:bg-white/30" onClick={() => direction !== 'DOWN' && setDirection('UP')}>⬆️</button>
                <div></div>
                <button className="p-4 bg-white/10 rounded-lg active:bg-white/30" onClick={() => direction !== 'RIGHT' && setDirection('LEFT')}>⬅️</button>
                <button className="p-4 bg-white/10 rounded-lg active:bg-white/30" onClick={() => direction !== 'UP' && setDirection('DOWN')}>⬇️</button>
                <button className="p-4 bg-white/10 rounded-lg active:bg-white/30" onClick={() => direction !== 'LEFT' && setDirection('RIGHT')}>➡️</button>
            </div>
        </div>
    );
}
