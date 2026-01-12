import { v4 as uuidv4 } from "uuid";

export function getPlayerId() {
  if (typeof window === "undefined") return null;

  let id = localStorage.getItem("playerId");

  if (!id) {
    id = uuidv4();
    localStorage.setItem("playerId", id);
  }

  return id;
}
