import { useState } from "react";
import Square from "./Square";

export default function Board() {

    const initialValue = Array(9).fill(null) 
    const [value, setValue] = useState(initialValue)
    
    const XTurn = () => {
        setValue('X')
        console.log(state)
    }

    return (
        <>
            <div className="Board-div">
                <div className="row">
                    <Square onClick={XTurn}/>
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        </>
    )
}
