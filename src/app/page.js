"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import TerminalBox from "@/components/TerminalBox";


export default function Home() {

  const router = useRouter();
  const [difficulty, setDifficulty] = useState("medium");



  return (
    <div className="min-h-screen flex items-center justify-center">
      <TerminalBox>
        <h1 className="text-3xl mb-4">FRAMEFLIX TERMINAL v1.0</h1>
        <pre className="text-green-300 mb-8">
          {`> SYSTEM ONLINE
> MOVIE DATABASE READY
> WAITING FOR USER`}
        </pre>


        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="mb-6 bg-black border border-green-400 p-2 w-full"
        >
          <option value="easy">EASY</option>
          <option value="medium">MEDIUM</option>
          <option value="hard">HARD</option>
        </select>

        <button
          onClick={() => router.push(`/game?mode=${difficulty}`)}
          className="w-full border border-green-400 py-4 hover:bg-green-400 hover:text-black transition shadow-[0_0_20px_#00ff9c]"
        >
          START GAME
        </button>
        <button
          onClick={() => router.push("/leaderboard")}
          className="mt-4 w-full border border-green-400 py-3 hover:bg-green-400 hover:text-black transition"
        >
          VIEW LEADERBOARD
        </button>
      </TerminalBox>
    </div>
  );
}
