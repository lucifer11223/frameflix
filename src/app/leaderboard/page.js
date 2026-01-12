"use client";

import { useEffect, useState } from "react";
import TerminalBox from "@/components/TerminalBox";
import { useRouter } from "next/navigation";


export default function Leaderboard() {
    const router = useRouter();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("/api/score")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center">

            <TerminalBox>
                <h1 className="text-2xl mb-6">GLOBAL LEADERBOARD</h1>

                <div className="space-y-4">
                    {players.map((p, i) => (
                        <div
                            key={i}
                            className="flex justify-between border-b border-green-400 pb-2 text-green-300"
                        >
                            <span>
                                #{i + 1} — {p.name}
                            </span>
                            <span>{p.score}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-sm text-green-400">
                    <p>&gt; Scores are updated in real-time</p>
                    <p>&gt; Hack the frame. Beat the system.</p>
                </div>

                <button
                    className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={() => router.push("/")} // navigate back to home/game
                >
                    Go Home
                </button>

            </TerminalBox>

        </div>
    );
}
