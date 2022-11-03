const Square = ({ value, onClick, isFinished}) => {
    
    return (
        <button className="square" disabled={value != undefined || isFinished} onClick = {onClick}>
            {value}
        </button>
    )
}

export default Square