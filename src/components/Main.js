import React from "react";
import Card from "./Card";
import data from "../data";

export default function Main() {
    return (
        <div className="w-full bg-white p-[20px] sm:p-[36px] rounded-[7px]">
            {data.map((item) => {
                return (
                    <Card 
                        key="id"
                        item={item}
                    />
                )
            })}
        </div>
    )
}