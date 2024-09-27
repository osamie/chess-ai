import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { makeAiMove } from '../utils/chessAi';

const useChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [status, setStatus] = useState('');

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setStatus('');
    setIsPlayerTurn(true);
  };

  const onMove = (from: string, to: string) => {
    if (game.move({ from, to })) {
      setFen(game.fen());
      setIsPlayerTurn(false);
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && !game.game_over()) {
      setTimeout(() => {
        const updatedGame = makeAiMove(game);
        setGame(updatedGame);
        setFen(updatedGame.fen());
        setIsPlayerTurn(true);
      }, 1000); // AI move delay
    } else if (game.in_checkmate()) {
      setStatus('Checkmate!');
    } else if (game.in_stalemate() || game.in_draw()) {
      setStatus('Draw!');
    }
  }, [isPlayerTurn]);

  return { fen, status, resetGame, onMove };
};

export default useChessGame;
