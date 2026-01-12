export default function GameImage({ src, blur }) {
  return (
    <div className="border border-green-400 rounded-lg overflow-hidden shadow-[0_0_25px_#00ff9c55]">
      <img
        src={src}
        style={{ filter: `blur(${blur}px)` }}
        className="w-full h-105 object-cover transition-all duration-500"
      />
    </div>
  );
}
