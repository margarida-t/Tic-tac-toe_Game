import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Table = ({totalWinX, totalWinO, totalDraws}) => {
    return (
        <Container>
            <Row className="boardLignBackgroundColor fw-bold">
                <Col>Players</Col>
                <Col>Wins</Col>
                <Col>Draws</Col>
            </Row>
            <Row>
                <Col>Player X</Col>
                <Col>{totalWinX}</Col>   
                <Col>{totalDraws}</Col>
            </Row>
            <Row className="boardLignBackgroundColor">
                <Col>Player O</Col>
                <Col>{totalWinO}</Col>
                <Col>{totalDraws}</Col>
            </Row>
        </Container>
    )
}

export default Table;