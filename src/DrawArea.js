import React, { useState, useRef } from 'react';
import './App.css';
import { Button, Box, TextField } from '@material-ui/core';
import Hover from './Hoverpopup'
 
function DrawArea() {
    const [lines, setlines] = useState([])
    const [isDrawing, setisDrawing] = useState(false)
    const [ShowArea, setShowArea] = useState(false)
    const [inputText, setinputText] = useState('')
    const [Maxx, setMaxx] = useState(0);
    const [Minx, setMinx] = useState(100000);
    const [Maxy, setMaxy] = useState(0);
    const [Miny, setMiny] = useState(100000);

    const [mystyle, setmystyle] = useState([{
        width: "100px",
        height: '100px',
        marginLeft: '10px',
        marginTop: '20px',
        background: 'red',
        position: 'absolute',
        opacity: '0.5'
    },
    {
        width: "100px",
        height: '100px',
        marginLeft: '10px',
        marginTop: '130px',
        background: 'red',
        position: 'absolute',
        opacity: '0.5'
    }
    ])

    const [desc, setdesc] = useState(["Desc 1", "desc 2"])

    function Finish() {
        let boundingRect = document.getElementById('drawArea').getBoundingClientRect();
        setShowArea(false);
        setlines([])
        setisDrawing(false)
        let Temp = [...mystyle]
        Temp.push({
            width: Maxx - Minx + "px",
            height: Maxy - Miny + 'px',
            marginLeft: Minx + 'px',
            marginTop: Miny - boundingRect.top + 'px',
            background: 'red',
            position: 'absolute',
            opacity: '0.5'
        })
        setmystyle(Temp)
        let TempText = [...desc]
        TempText.push(inputText)
        setdesc(TempText)
        setinputText('')
        setMaxx(0)
        setMinx(100000)
        setMaxy(0)
        setMiny(100000)
    }

    const handleChange = (event) => {
        setinputText(event.target.value)
    };

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
            <Button variant="outlined" onClick={() => Start()}> Start Draw </Button>
            {ShowArea &&
                <div
                    id='drawArea'
                    className="drawArea"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <Drawing lines={lines} />
                    <p align="center">
                        <label className="FormField__Label">Text: </label>
                        <TextField
                            value={inputText}
                            onChange={handleChange}
                        >
                        </TextField></p>
                    <Button variant="outlined" onClick={() => Finish()}> Finish </Button>

                </div>
            }
            {mystyle.map((Boxes, index) => (
                <Hover Holder={<h1 style={Boxes}></h1>} Content={[<div className="Popup"> <h1>{desc[index]}</h1></div>]} />
            ))}

            
            
        </div>
    );
}


export default DrawArea;