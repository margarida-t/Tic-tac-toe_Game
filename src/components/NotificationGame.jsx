import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotificationGame = ({player, winner, resetClick, draw, newGameClick}) => {
    
    return (
        <div className= "mainContainerResetButton mb-2" >
            {winner === "" && draw === false && <div className= "marginBottom">É a vez do Jogador {player} jogar.</div>}
            {winner !== "" && <div> O vencedor é o jogador {winner}</div>}
            {draw === true && <div> Empate</div>}    
       
        <Container>
            <Col md={6} ><Button variant= "primary" onClick= {resetClick} >Reset</Button> </Col>
            <Col md={6}><Button variant = "secondary" onClick = {newGameClick}>New Game</Button></Col>
        </Container>
    </div> 
    )
}

export default NotificationGame;

/*
<div className={winner==="" ? '': 'displayNone'}> É a vez do Jogador {player} jogar.</div>
<div className={winner!=="" ? '': 'displayNone'}> O vencedor é o jogador {winner}.</div>*/