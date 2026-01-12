"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import GameImage from "@/components/GameImage";
import GuessInput from "@/components/GuessInput";
import HintPanel from "@/components/HintPanel";
import { useRouter } from "next/navigation";
import { calculateScore, reduceBlur } from "@/lib/gameLogic";
import { DIFFICULTY } from "@/lib/difficulty";
import { useSearchParams } from "next/navigation";

export default function Game() {
    const search = useSearchParams();
    const mode = search.get("mode") || "medium";
    const config = DIFFICULTY[mode];

    const router = useRouter();

    const [blur, setBlur] = useState(config.blur);
    const [time, setTime] = useState(config.time);
    const [hintsLeft, setHintsLeft] = useState(config.hints);


    const [movie, setMovie] = useState(null);
    const [guess, setGuess] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        loadMovie();
    }, []);

    useEffect(() => {
        if (time <= 0) {
            router.push(`/result?score=${score}`);
            return;
        }

        const timer = setInterval(() => {
            setTime((t) => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    function loadMovie() {
        fetch("/api/movies")
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setBlur(20);
                setGuess("");
                setShowHint(false);
                setAttempts(0);
            });
        setBlur(config.blur);
        setTime(config.time);
        setHintsLeft(config.hints);
    }

    function checkAnswer() {
        if (!guess || !movie) return;

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (guess?.toLowerCase() === movie?.title?.toLowerCase()) {
            const points = calculateScore({ attempts: newAttempts });
            const newScore = score + points;
            setScore(newScore);
            router.push(`/result?score=${newScore}`);
        } else {
            setScore((s) => s - 10);
            setBlur((b) => reduceBlur(b));
        }
    }

    return (
        <div className="min-h-screen p-8 text-green-400">

            <Header
                score={score}
                level={1}
                time={`00:${time}`}
                blur={Math.round((blur / 20) * 100)}
            />

            {movie && <GameImage src={movie.image} blur={blur} />}

            <GuessInput value={guess} onChange={setGuess} onSubmit={checkAnswer} />

            <button
                disabled={hintsLeft <= 0}
                onClick={() => {
                    setShowHint(true);
                    setHintsLeft((h) => h - 1);
                }}
                className="mt-4 border border-green-400 px-4 py-2 disabled:opacity-40"
            >
                REQUEST HINT ({hintsLeft})
            </button>

            {movie && (
                <HintPanel
                    revealed={showHint}
                    year={movie.year}
                    genre={movie.genre}
                />
            )}

        </div>
    );
}
