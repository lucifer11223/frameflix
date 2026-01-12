import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  playerId: { type: String, unique: true },
  name: String,
  score: Number,
  gamesPlayed: { type: Number, default: 1 },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
