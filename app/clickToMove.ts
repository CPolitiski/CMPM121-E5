import type { Session } from "../core/mod.ts";
import type { Direction, Position } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";
import type { BoardInput } from "./tileClicks.ts";

function directionBetween(
  player: Position,
  clicked: Position,
): Direction | undefined {
  const dx = clicked.x - player.x;
  const dy = clicked.y - player.y;

  if (dx === 1 && dy === 0) return "right";
  if (dx === -1 && dy === 0) return "left";
  if (dx === 0 && dy === 1) return "down";
  if (dx === 0 && dy === -1) return "up";

  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session: Session, board: BoardInput) {
    return board.onTileClick((at) => {
      const player = session.getState().puzzle.player;
      const direction = directionBetween(player, at);

      if (direction) {
        session.dispatch({ kind: "move", direction });
      }
    });
  },
};
