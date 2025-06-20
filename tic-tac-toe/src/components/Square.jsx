import Board from './Board.jsx'

export default function Square({value, onClick, pointerEvent}) {
    // The Square component represents a single square in the Tic Tac Toe game.
    return(
        <>
            <div className="Square-div" onClick={onClick} style={{ pointerEvents: pointerEvent ? 'none' : 'auto' }} >
                <p>{value}</p>
            </div>
        </>
    )
}