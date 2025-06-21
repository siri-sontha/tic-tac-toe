

export default function WinnerReveal({winner, turn }) {
  return (
    <div className="WinnerReveal-div">
        <p style={{ color: turn === 'X' ? 'white' : 'rgb(53, 251, 183)' }}>{!winner ? (turn === "X" ? "X turn" : "O turn") : "Game Over!!"}</p>
        <p style={{ color: winner === 'X' ? 'white' : 'rgb(53, 251, 183)' }}>{!winner ? " " : (winner === "Tie" ? "It's a tie!" : `${winner} is the winner`)}</p>
    </div>
  )
}
