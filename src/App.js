import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    return (
        <div className="w-full sm:w-[550px] mx-[auto] rounded-[10px]">
            <Header/>
            <Main/>
        </div>
    )
}