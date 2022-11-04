import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotificationGame = ({player, winner, resetClick, draw, newGameClick}) => {
    debugger
    return (
        <div className= "mainContainerResetButton mb-4" >
            {winner === "" && draw === false && <div className= "marginBottom">It's Player {player} turn.</div>}
            {winner !== "" && <div> The winner is {winner}</div>}
            {draw === true && <div> Draw </div>}    
       
        <Container>
            <Button variant = "secondary" onClick = {newGameClick} disabled = { winner === "" && draw === false}> New Game</Button>
            <Button variant= "primary" onClick= {resetClick} >Reset</Button>
            
        </Container>
    </div> 
    )
}

export default NotificationGame;

/*
<div className={winner==="" ? '': 'displayNone'}> É a vez do Jogador {player} jogar.</div>
<div className={winner!=="" ? '': 'displayNone'}> O vencedor é o jogador {winner}.</div>*/