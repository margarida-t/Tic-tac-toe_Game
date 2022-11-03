import './App.css';
import {useState, useEffect} from 'react';
import Board from './components/Board'
import NotificationGame from './components/NotificationGame'
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isClean, setIsClean] = useState(false);
  const [whoWins, setWhoWins] =useState("");
  const [drawNotification, setDrawNotification] = useState(false);
  const [totalWinX, setTotalWinX] = useState(0);
  const [totalWinO, setTotalWinO] = useState(0);
  const [totalDraws, setTotalDraws] = useState(0);

  const handlerResetClick = () => {
    setCurrentPlayer("X");
    setIsClean(true);
    setWhoWins("");
    setTotalWinX(0);
    setTotalWinO(0);
    setTotalDraws(0);
  }

  const handlerCleanDone = () => {
    setIsClean(false);
    setDrawNotification(false)
  }

  const handlerWhoWins = (winner) => {
    debugger
      setWhoWins(winner);
      if(winner ==="winnerX") {
        setTotalWinX(totalWinX+1);
      }
      else {
        setTotalWinO(totalWinO+1);
      }
  }

  const handlerDraw = () => {
    setDrawNotification(true);
    setTotalDraws(totalDraws+1);
  }

  const handlerNewGameClick = () => {
    setCurrentPlayer("X");
    setIsClean(true);
    setWhoWins("");
  }

  return (

    <div className = "alignDiv">
      <Board player = {currentPlayer} clickEvent = {setCurrentPlayer} isCleanBoard = {isClean} cleanDoneEvent = {() => handlerCleanDone()} whoWins = {(winner) => handlerWhoWins(winner)} draw = {() => handlerDraw()}></Board>
      <NotificationGame player= {currentPlayer} winner={whoWins} resetClick ={() => handlerResetClick()} newGameClick = {() => handlerNewGameClick()} draw ={drawNotification}></NotificationGame>
      <Table totalWinX= {totalWinX} totalWinO= {totalWinO} totalDraws = {totalDraws}></Table>
    </div>
  )
}

export default App;