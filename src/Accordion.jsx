import React, { useState } from "react";
import MyAccordion from "./MyAccordion";
import "./MyAccordion.css"
import data from "./data"
const Accordion=()=>{
    const [data1,setData1]=useState(data)
    return<div className="main-com">
    <section className="main-div">
    <h1>React Interview Question</h1>
        {data.map((item)=>{
            const{id}=item;
            return<>
            <MyAccordion key={id} {...item}/>
            </>
        })}
        </section>
    </div>
}
export default Accordion;