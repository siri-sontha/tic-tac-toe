import Board from './Board.jsx'

export default function Square({value, onClick, pointerEvent}) {
    return(
        <>
            <div className="Square-div" onClick={onClick} style={{pointerEvents: pointerEvent ? 'none' : 'auto'}}>
                <p style={{ color: value === 'X' ? 'white' : 'rgb(53, 251, 183)' }}>{value}</p>
            </div>
        </>
    )
}