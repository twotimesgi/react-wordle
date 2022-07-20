import './App.css';
import { useEffect, useState } from 'react';
import Row from './components/Row';
import axios from 'axios';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

const ROWS = 5;
function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(ROWS).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const checkWord = (word) => {
    //TODO: implement checkWord axios request
    return true;
  }

  useEffect(() => {
    async function getRandomWord() {
      //TODO: implement getRandomWord axios request
      const res = { data: ['hello'] }; // Hardcoded solution for now
      console.log("solution: ", res.data[0]);
      setSolution(res.data[0].toLowerCase());
    }
    getRandomWord();
  }, []);

  useEffect(() => {
    const handleTyping = (e) => {
      if (!gameOver) {
        if (e.key === 'Backspace') {
          setCurrentGuess(old => old.slice(0, -1));
          return;
        }

        if (e.key === 'Enter' && currentGuess.length === 5) {
          if (!checkWord(currentGuess)) {
            return;
          }

          if (currentGuess === solution) {
            setGameOver(true);
            setGameWon(true);
            return;
          }

          if(guesses[guesses.length-2] != null){
            setGameOver(true);
            return;
          }

          const newGuesses = [...guesses];
          newGuesses[newGuesses.findIndex(val => val === null)] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess('');
          return;
        }

        if (e.key !== 'Enter' && e.key !== "Backspace" && (e.key).match(/[A-Za-z]/) && currentGuess.length < 5) {
          setCurrentGuess(old => old + e.key.toLowerCase());
          return;
        }
      }
    }

    document.addEventListener('keydown', handleTyping);

    return () => document.removeEventListener('keydown', handleTyping);
  }, [currentGuess, guesses, solution, gameOver, gameWon]);

  return (
    <div className='app'>
        <div className='main'>
          <div className='grid'>
            {
              guesses.map((guess, i) => {
                const isCurrentGuess = i === guesses.findIndex(val => val == null);
                return <Row key={i} guess={isCurrentGuess ? currentGuess : guess} />
              })
            }
          </div>
        </div>
      <Backdrop show={gameOver} />
      <Modal gameWon={gameWon} show={gameOver} />
    </div>
  );
}

export default App;
