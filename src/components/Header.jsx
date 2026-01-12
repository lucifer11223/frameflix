export default function Header({ score = 0, level = 1, time = "00:00", blur = 100 }) {
  return (
    <div className="flex justify-between text-sm text-green-300 mb-4">
      <span>FRAMEFLIX // LEVEL {level} // SCORE {score}</span>
      <span>TIME {time} | BLUR {blur}%</span>
    </div>
  );
}
