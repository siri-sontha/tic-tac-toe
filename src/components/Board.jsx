import { useState, useEffect } from "react";
import Square from "./Square";
import WinnerReveal from "./WinnerReveal";
import Reset from "./Reset";

export default function Board() {

    const initialValue = Array(9).fill(null) 

    const [value, setValue] = useState(initialValue)
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState('')

    useEffect(() => {
        checkWinner()
    }, [value])
    

    const handleClick = (index) => {
        const newValue = [...value]
        newValue[index] = turn
        setValue(newValue)
        setTurn(turn === 'X' ? 'O' : 'X')
    }

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i]
            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
                setWinner(value[a])
                return
            }
        }
         if (!value.includes(null)) {
            setWinner("Tie");
        }
    }

    const reset =  () =>{
        setValue(initialValue)
        setTurn('X')
        setWinner('')       
    }
 
    return (
        <>
            <div className="Board-div">
                <WinnerReveal winner={winner} turn={turn}/>
                <div className="row">
                    <Square onClick={() => handleClick(0)} value={value[0]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(1)} value={value[1]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(2)} value={value[2]} pointerEvent={!!winner} />
                </div>
                <div className="row">
                    <Square onClick={() => handleClick(3)} value={value[3]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(4)} value={value[4]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(5)} value={value[5]} pointerEvent={!!winner} />
                </div>
                <div className="row">
                    <Square onClick={() => handleClick(6)} value={value[6]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(7)} value={value[7]} pointerEvent={!!winner} />
                    <Square onClick={() => handleClick(8)} value={value[8]} pointerEvent={!!winner} />
                </div>
                <Reset reset={reset}/>
            </div>
        </>
    )
}
