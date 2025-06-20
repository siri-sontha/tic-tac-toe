

export default function WinnerReveal({winner, turn }) {
  return (
    <div className="WinnerReveal-div">
        <p>{turn === "X" ? "X turn" : "O turn"}</p>
        <p>{winner === "Tie" ? "It's a tie!" : `The winner is ${winner}`}</p>
    </div>
  )
}
