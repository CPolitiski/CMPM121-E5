import type { Puzzle } from "../core/mod.ts";
import { samePosition } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const filledGoals =
    puzzle.layout.goals.filter((goal) =>
      puzzle.crates.some((crate) => samePosition(crate, goal))
    ).length;

  return (
    <p>
      Goals filled: {filledGoals} of {puzzle.layout.goals.length}
    </p>
  );
}
