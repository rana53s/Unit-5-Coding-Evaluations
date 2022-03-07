import { useState } from "react";

export function Pens() {

    const [pens, setPens] = useState(10);
    const handleChange = (val) => {
        setPens(pens + val);
    };

    return (
        <div className="items">
            <span>Pens:</span>
            <button className="addPen" onClick={() => handleChange(1)} >
                Add
            </button>
            <button className="remPen" onClick={() => {
                if (pens > 0) {
                    handleChange(-1)
                }
            } }>
                Remove
            </button>
            <span className="totalPens">{pens}</span>
        </div>
    );
}