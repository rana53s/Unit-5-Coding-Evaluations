import { useState } from "react";

export function InkPens() {

    const [inks, setInks] = useState(78);
    const handleChange = (val) => {
        setInks(inks + val);
    };

    return (
        <div className="items">
            <span>Inks:</span>
            <button className="addInk" onClick={() => handleChange(1)} >
                Add
            </button>
            <button className="remInk" onClick={() => {
                if (inks > 0) {
                    handleChange(-1)
                }
            } }>
                Remove
            </button>
            <span className="totalInks">{inks}</span>
        </div>
    );
}