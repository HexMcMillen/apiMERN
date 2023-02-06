import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {

    return (
        <div className="topNav">
            <Link to={'/'}><h1>The Universe of Rick and Morty</h1></Link>
        </div>
    );
}

export default BottomNav;