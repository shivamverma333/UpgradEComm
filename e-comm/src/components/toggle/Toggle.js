import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import './Toggle.css'


const Toggle = (props) => {

    const [category, setCategory ] = useState('all');

    const handleCategory=(e)=>{
        setCategory(e.target.value);
        
    }

    const handleClick=(e)=>{
        console.log("click me!!");
        console.log(e.target.value);
        props.setFilter(e.target.value);
    }

    return (
        <div className="toggleButtonContainer">
            <ToggleButtonGroup
                value={category}
                exclusive
                onChange={handleCategory}
                aria-label="text category"
            >
                <ToggleButton onClick={handleClick} value="ALL" aria-label="all">
                    All
                </ToggleButton>
                <ToggleButton onClick={handleClick} value="APPAREL" aria-label="apparel">
                    Apparel
                </ToggleButton>
                <ToggleButton onClick={handleClick} value="ELECTRONICS" aria-label="electronics">
                    Electronics
                </ToggleButton>
                <ToggleButton onClick={handleClick} value="PERSONALCARE" aria-label="personal care">
                    Personal Care
                </ToggleButton>
            </ToggleButtonGroup>
        </div>

    );
}

export default Toggle;