"use client";

import { getPlayerId } from "@/lib/player";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TerminalBox from "@/components/TerminalBox";

export default function Result() {
  const search = useSearchParams();
  const router = useRouter();

  const score = search.get("score");

  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rank, setRank] = useState(null);

  async function submitScore(finalScore, playerName) {
    const playerId = getPlayerId();
    if (!playerId) {
      console.error("Could not generate player ID");
      return;
    }

    const payload = { playerId, name: playerName, score: finalScore };

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setRank(data.rank);
      setSubmitted(true);

      if (res.ok) {
        console.log("Score updated:", data);
      } else {
        console.error("Error updating score:", data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }

  const handleContinue = () => {
    router.push("/"); // Navigate back to home/game page
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <TerminalBox>
        <h1 className="text-2xl mb-4">MISSION COMPLETE</h1>

        <p className="mb-2">
          TOTAL SCORE: <span className="text-green-300">{score}</span>
        </p>

        {submitted && (
          <p className="mt-4 text-green-300">GLOBAL RANK: #{rank}</p>
        )}

        {!submitted ? (
          <>
            <p className="mb-2">&gt; ENTER PLAYER NAME</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-green-400 p-3 mb-4"
            />

            <button
              onClick={() => submitScore(score, name)}
              className="w-full border border-green-400 py-3 hover:bg-green-400 hover:text-black"
            >
              SUBMIT SCORE
            </button>

            {/* Continue without submitting */}
            <button
              onClick={handleContinue}
              className="w-full mt-2 border border-yellow-400 py-3 hover:bg-yellow-400 hover:text-black"
            >
              CONTINUE WITHOUT SUBMITTING
            </button>
          </>
        ) : (
          <>
            <p className="mt-4 text-green-300">SCORE UPLOADED ✔</p>

            <button
              onClick={() => router.push("/leaderboard")}
              className="mt-4 w-full border border-green-400 py-3"
            >
              VIEW LEADERBOARD
            </button>

            <button
              onClick={handleContinue}
              className="w-full mt-2 border border-yellow-400 py-3 hover:bg-yellow-400 hover:text-black"
            >
              CONTINUE GAME
            </button>
          </>
        )}
      </TerminalBox>
    </div>
  );
}
