import React from 'react';
import "./features.css";
import Card from './Card';
import data from "../../data/api";
import { Ri24HoursFill, RiArrowRightLine } from 'react-icons/ri';


const Features = () => {
    return (
        <>
            <section className='features top ' id="features">
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I do!!</h1>
                    </div>
                </div>                
                <div className="container grid">
                    {data.map((dt,index) => {
                        return <Card key={index} icon={dt.icon} title={dt.title} content={dt.content}></Card>
                    })}
                </div>
            </section>
        </>
    );
};

export default Features;