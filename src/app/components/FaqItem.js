"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
const FaqItem = ({ ques, ans }) => {
    const [vis, setVis] = useState(false);
    return (
        <>
            <div className="flex flex-col">
                <div className="flex p-3">
                    <div>
                        <GoPlus
                            onClick={() => {
                                setVis(!vis);
                            }}
                            className={`text-white text-[30px] font-bold transition ${vis ? "rotate-45" : ""}`}
                        />
                    </div>
                    <div className="flex flex-col  ml-6 transition">
                        <h5 className="font-dmmono text-base transition">
                            {ques}
                        </h5>
                        <p className={`${vis ? "" : "hidden"} transition font-dmmono text-sm mt-5 text-gray-300`}>
                            {ans.split('\n').map((line,ind)=>{
                                return <React.Fragment key={ind}>
                                    {line} <br />
                                </React.Fragment>   
                            })}
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r to-soft-pink from-soft-cyan"></div>
            </div>
        </>
    );
};

export default FaqItem;
