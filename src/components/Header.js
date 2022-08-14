import React from "react";
import earth from "../images/icons8-earth-planet-64.png";

export default function Header() {
    return (
        <nav className="w-full h-[50px] bg-[#F55A5A] text-white flex justify-center items-center rounded-t-[7px]">
            <img alt="" src={earth} className="w-[25px] h-[25px] mr-2"/>
            <h1>my travel journal</h1>
        </nav>
    )
}