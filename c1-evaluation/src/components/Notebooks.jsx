import { useState } from "react";

export function Notebooks() {

    const [notebooks, setNotebooks] = useState(44);
    const handleChange = (val) => {
        setNotebooks(notebooks + val);
    };

    return (
        <div className="items">
            <span>Notebooks:</span>
            <button className="addNotebook" onClick={() => handleChange(1)} >
                Add
            </button>
            <button className="remNotebook" onClick={() => {
                if (notebooks > 0) {
                    handleChange(-1)
                }
            } }>
                Remove
            </button>
            <span className="totalNotebooks">{notebooks}</span>
        </div>
    );
}