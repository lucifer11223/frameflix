export default function TerminalBox({ children }) {
  return (
    <div className="border border-green-400 rounded-xl p-6 shadow-[0_0_30px_#00ff9c55] bg-[#0B0F0C]">
      {children}
    </div>
  );
}
