export default function GuessInput({ value, onChange, onSubmit }) {
  return (
    <div className="mt-6">
      <p>&gt; GUESS MOVIE</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        className="w-full bg-black border border-green-400 p-3 text-green-400 outline-none"
        placeholder="Type movie name..."
      />
    </div>
  );
}
