import { connectDB } from "@/lib/db";
import Score from "@/models/Score";

export async function POST(req) {
  try {
    await connectDB();

    const { playerId, name, score } = await req.json();

    if (!playerId || !name || score == null) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // Add score to existing player
    const updated = await Score.findOneAndUpdate(
      { playerId },
      { $inc: { score: score, gamesPlayed: 1 }, $set: { name } },
      { upsert: true, new: true }
    );

    // Calculate rank
    const higher = await Score.countDocuments({ score: { $gt: updated.score } });

    return new Response(JSON.stringify({ ...updated._doc, rank: higher + 1 }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("POST /api/score error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}


export async function GET() {
  try {
    await connectDB();
    const data = await Score.find().sort({ score: -1 }).limit(50);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("GET /api/score error:", err);
    // Always return an array even if there's an error
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

