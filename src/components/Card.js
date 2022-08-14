import React from "react";
import location from "../images/icons8-location-48.png";

export default function Card(props) {
    return (
        <section className="w-full ">
            <div>
                <div className="flex items-center">
                    <img src={props.item.imageUrl} alt="" className="w-[126px] h-[168px] rounded-md mr-[20px]"/>
                    <div>
                        <div className="flex items-start text-[10px] font-[600]">
                            <img alt="" src={location} className="w-[12px] h-[12px]"/>
                            <h3 className="mr-2 ml-[3px] tracking-widest">{props.item.location}</h3>
                            <a target="_blank" rel="noreferrer" href={props.item.googleMapsUrl} className="underline text-[#918E9B]"><p>View on Google Maps</p></a>
                        </div>
                        <h1 className="font-[700] text-[22px] mb-[10px]">{props.item.title}</h1>
                        <h1 className="text-[10px] font-[700] mb-[5px]">{props.item.startDate} - {props.item.endDate}</h1>
                        <p className="text-[12px]">
                            {props.item.description}
                        </p>
                    </div>
                </div>
                <hr className="my-5"/>
            </div>
        </section>
    )
}