import React from "react";

// takes in array of hex values
// returns a row of pixels
export default function Row(props) {
    const row = props.colors.map((color, index) => {
        return (
            <div
                className="pixel"
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => props.update(index, props.index)}
            />
        );
    });
    return <div className="row">{row}</div>;
}
