import { Chess } from 'chess.js';

export const makeAiMove = (game: Chess): Chess => {
  const possibleMoves = game.moves();
  if (possibleMoves.length > 0) {
    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(randomMove);
  }
  return game;
};
