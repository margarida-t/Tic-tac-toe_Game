import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Table = ({totalWinX, totalWinO, totalDraws}) => {
    return (
        <Container>
            <Row>
                <Col>Players</Col>
                <Col>Wins</Col>
                <Col>Draws</Col>
            </Row>
            <Row>
                <Col>PlayerX</Col>
                <Col>{totalWinX}</Col>   
                <Col>{totalDraws}</Col>
            </Row>
            <Row>
                <Col>PlayerO</Col>
                <Col>{totalWinO}</Col>
                <Col>{totalDraws}</Col>
            </Row>
        </Container>
    )
}

export default Table;