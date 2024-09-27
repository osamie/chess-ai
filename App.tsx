import React from 'react';
import { SafeAreaView, Button, Text } from 'react-native';
import Chessboard from './components/Chessboard';
import useChessGame from './hooks/useChessGame';
import { styles } from './styles';

const App = () => {
  const { fen, status, resetGame, onMove } = useChessGame();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Z Chess Game</Text>
      <Chessboard fen={fen} onMove={onMove} />
      <Text style={styles.status}>{status}</Text>
      <Button title="Restart Game" onPress={resetGame} />
    </SafeAreaView>
  );
};

export default App;
