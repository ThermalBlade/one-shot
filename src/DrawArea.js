import React, { useState } from 'react';
import './App.css';
 
function DrawArea() {
    const [lines, setlines] = useState([])
    const [isDrawing, setisDrawing] = useState(false)

    function handleMouseDown(mouseEvent) {
        if (mouseEvent.button != 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);
        /*
        this.setState(prevState => ({
            lines: prevState.lines.push(new Immutable.List([point])),
            isDrawing: true
        }));*/
        setlines(lines => lines.concat([point]))
        setisDrawing(true)
    }

    function handleMouseMove(mouseEvent) {
        if (!isDrawing) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);
        /*
        this.setState(prevState => ({
            lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
        }));*/
        setlines(lines => lines.concat([point]))
    }

    function handleMouseUp() {
        setisDrawing(false)
    }

    function relativeCoordinatesForEvent(mouseEvent) {
        const boundingRect = this.refs.drawArea.getBoundingClientRect();
        /*
        return new Immutable.Map({
            x: mouseEvent.clientX - boundingRect.left,
            y: mouseEvent.clientY - boundingRect.top,
        });*/
    }
    return (
        <div
            className="drawArea"
            ref="drawArea"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            <Drawing lines={this.state.lines} />
        </div>
    );
}

function Drawing({ lines }) {
    return (
        <svg className="drawing">
            {lines.map((line, index) => (
                <DrawingLine key={index} line={line} />
            ))}
        </svg>
    );
}

function DrawingLine({ line }) {
    const pathData = "M " +
        line
            .map(p => {
                return `${p.get('x')} ${p.get('y')}`;
            })
            .join(" L ");

    return <path className="path" d={pathData} />;
}

export default Map;