export default function HintPanel({ year, genre, director, revealed }) {
  if (!revealed) return null;

  return (
    <div className="mt-4 border border-green-400 rounded-lg p-4 text-sm shadow-[0_0_15px_#00ff9c55] bg-black">
      <p className="mb-2 text-green-300">&gt; HINT SYSTEM</p>

      <p>&gt; RELEASE YEAR: <span className="text-green-400">{year}</span></p>
      <p>&gt; GENRE: <span className="text-green-400">{genre}</span></p>

      {director && (
        <p>&gt; DIRECTOR: <span className="text-green-400">{director}</span></p>
      )}

      <p className="mt-2 text-xs text-green-300">
        Accessing encrypted movie database...
      </p>
    </div>
  );
}
