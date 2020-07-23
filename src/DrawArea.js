import React, { useState, useRef } from 'react';
import './App.css';
import { Button, Box } from '@material-ui/core';
 
function DrawArea() {
    const [lines, setlines] = useState([])
    const [isDrawing, setisDrawing] = useState(false)
    const [ShowArea, setShowArea] = useState(false)
    const [Maxx, setMaxx] = useState(0);
    const [Minx, setMinx] = useState(100000);
    const [Maxy, setMaxy] = useState(0);
    const [Miny, setMiny] = useState(100000);

    const [mystyle, setmystyle] = useState({
        position: 'absolute'
    })

    function Finish() {
        setShowArea(false);
        setlines([])
        setisDrawing(false)
        setmystyle({
            width: Maxx - Minx + "px",
            height: Maxy - Miny + 'px',
            marginLeft: Minx + 'px',
            marginTop: Miny + 'px',
            background: 'red',
            position: 'absolute'
        })
        setMaxx(0)
        setMinx(100000)
        setMaxy(0)
        setMiny(100000)
    }

    function Start() {
        setShowArea(true)
    }

    function handleMouseDown(mouseEvent) {
        if (mouseEvent.button != 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);
        let Temp = [...lines]
        Temp.push([point])
        setlines(Temp)
        setisDrawing(true)
    }

    function handleMouseMove(mouseEvent) {
        if (!isDrawing) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);
        let Temp = [...lines]
        Temp[Temp.length-1].push(point)
        setlines(Temp)
    }

    function handleMouseUp() {
        setisDrawing(false)
    }

    function relativeCoordinatesForEvent(mouseEvent) {
        let boundingRect = document.getElementById('drawArea').getBoundingClientRect();
        //console.log(mouseEvent.clientX, Maxx)
        if (isDrawing) {
            if (mouseEvent.clientX > Maxx) {
                setMaxx(mouseEvent.clientX)
            }
            else if (mouseEvent.clientX < Minx) {
                setMinx(mouseEvent.clientX)
            }
            if (mouseEvent.clientY > Maxy) {
                setMaxy(mouseEvent.clientY)
            }
            else if (mouseEvent.clientY < Miny) {
                setMiny(mouseEvent.clientY)
            }
        }
        return {
            x: mouseEvent.clientX - boundingRect.left,
            y: mouseEvent.clientY - boundingRect.top,
        }
    }

    function Drawing({ lines }) {
        //console.log(lines)
        return (
            <svg className="drawing">
                {lines.map((line, index) => (
                    <DrawingLine key={index} line={line} />
                ))}
            </svg>
        );
    }

    function DrawingLine({ line }) {
        let pathData = "M " + line.map(p => p.x + ' ' + p.y).join(" L ");
        return <path className="path" d={pathData} />;
    }
    return (
        <div>
            {ShowArea
                ? <div
                    id='drawArea'
                    className="drawArea"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <Drawing lines={lines} />
                    <Button variant="outlined" onClick={() => Finish()}> Finish </Button>
                </div>
                : <Button variant="outlined" onClick={() => Start()}> Start Draw </Button>
            }
            <h1 style={mystyle}></h1>
        </div>
    );
}


export default DrawArea;