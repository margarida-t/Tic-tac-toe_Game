import Square from './Square';
import {useEffect, useState} from 'react';
import isWinner from '../logic/isWinner'


const Board = ({player, clickEvent, isCleanBoard, cleanDoneEvent, whoWins, draw}) => {
    const [squares, setSquares] = useState(Array(9).fill(null)); 
    const [firstPlayerX, setFirstPlayerX] = useState([]);
    const [secondPlayerO, setSecondPlayerO] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    
    useEffect(() => {
        
        if(isCleanBoard) {
            setFirstPlayerX([]);
            setSecondPlayerO([]);
            setSquares(Array(9).fill(null));
            cleanDoneEvent();
            setIsFinished(false);
        }
        else {
            
                var winnerX = isWinner(firstPlayerX);
  
          
                var winnerO = isWinner(secondPlayerO);
        
            
            if(winnerX || winnerO) {
                if(winnerX) {
                    setIsFinished(true)
                    whoWins('winnerX')
                }
                if(winnerO) {
                    setIsFinished(true)
                    whoWins('winnerO');
                }
            } 
            if(winnerX===undefined) {
                draw();
            }
        }
    },[player,isCleanBoard])

    const handleClick = (i) => {
        squares[i] = player

         if(player == "X") {
            setFirstPlayerX(prev => [...prev,i])   
        } else {
            setSecondPlayerO(prev => [...prev,i])
        }
                
       /* if(document.querySelectorAll(".square")[i] !== undefined) {
            document.querySelectorAll(".square")[i].disabled = true;
        }*/

        setSquares(squares);
        clickEvent(player == "X" ? "O" : "X");
    }

    return (
        <div className ="marginLeft">
            <div className ="board-row">
                <Square value={squares[0]} onClick = {() => handleClick(0)} isFinished = {isFinished}/>
                <Square value={squares[1]} onClick = {() => handleClick(1)} isFinished = {isFinished}/>
                <Square value={squares[2]} onClick = {() => handleClick(2)} isFinished = {isFinished}/>
            </div>
            <div className ="board-row">
                <Square value={squares[3]} onClick = {() => handleClick(3)} isFinished = {isFinished}/>
                <Square value={squares[4]} onClick = {() => handleClick(4)} isFinished = {isFinished}/>
                <Square value={squares[5]} onClick = {() => handleClick(5)} isFinished = {isFinished}/>
            </div>
            <div className ="board-row">
                <Square value={squares[6]} onClick = {() => handleClick(6)} isFinished = {isFinished}/>
                <Square value={squares[7]} onClick = {() => handleClick(7)} isFinished = {isFinished}/>
                <Square value={squares[8]} onClick = {() => handleClick(8)} isFinished = {isFinished}/>
            </div>
        </div>

    )
}

 

export default Board;