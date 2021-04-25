import React from "react";
import Row from "./Row";

// takes in array of arrays as props
// returns a bunch of Row components
export default function Grid(props) {
    const grid = props.colors.map((colors, index) => {
        return (
            <Row key={index} colors={colors} index={index} update={props.update} />
        );
    });
    return <div className="grid">{grid}</div>;
}
