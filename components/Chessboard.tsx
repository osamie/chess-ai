import React from 'react';
import { Chessboard as RNChessboard } from 'react-native-chessboard';

interface ChessboardProps {
  fen: string;
  onMove: (from: string, to: string) => void;
}

const Chessboard: React.FC<ChessboardProps> = ({ fen, onMove }) => {
  return <RNChessboard fen={fen} onMove={(move) => onMove(move.from, move.to)} />;
};

export default Chessboard;
