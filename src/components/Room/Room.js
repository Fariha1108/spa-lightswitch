import React, { useState } from 'react';
import { Button } from '..';
import { Couch } from '..';
import './Room.css';


const Room = ({ visibilityState }) => {

    const [visible, setVisible] = useState(visibilityState);

    const lightSwitch = () => {
        if (visible === false) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    return (
        <div className="Room"
            style={{
                backgroundColor: `${visible ? "bisque" : "black"}`
            }}
        >
            <div className="Light">
                <div className="partOne"></div>
                <div className="partTwo"
                    style={{
                        display: `${visible ? "block" : "none"}`
                    }}
                ></div>
                <Button
                    title='Switch On'
                    onClick={lightSwitch}
                />
                <br />
                <Button
                    title='Switch Off'
                    onClick={lightSwitch}
                />
            </div>
            <div className="Lit"
                style={{
                    display: `${visible ? "block" : "none"}`
                }}
            >
                <h2>"The room is lit"</h2>
                <Couch />
            </div>

            <h2 className="Dark"
                style={{
                    display: `${visible ? "none" : "block"}`
                }}
            >"The room is dark"</h2>
        </div>
    )
}

export default Room;