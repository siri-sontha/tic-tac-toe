import Board from './Board.jsx'

export default function Square({value, onClick, pointerEvent}) {
    // The Square component represents a single square in the Tic Tac Toe game.
    return(
        <>
            <div className="Square-div" onClick={onClick} style={{pointerEvents: pointerEvent ? 'none' : 'auto'}}>
                <p style={{ color: value === 'X' ? 'white' : 'rgb(53, 251, 183)' }}>{value}</p>
            </div>
        </>
    )
}