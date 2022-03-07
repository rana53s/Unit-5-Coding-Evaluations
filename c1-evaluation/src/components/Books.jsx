import { useState } from "react";

export function Books() {

    const [books, setBooks] = useState(13);
    const handleChange = (val) => {
        setBooks(books + val);
    };

    return (
        <div className="items">
            <span>Books:</span>
            <button className="addBook" onClick={() => handleChange(1)} >
                Add
            </button>
            <button className="remBook" onClick={() => {
                if (books > 0) {
                    handleChange(-1)
                }
            } }>
                Remove
            </button>
            <span className="totalBooks">{books}</span>
        </div>
    );
}
