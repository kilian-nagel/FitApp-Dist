
import React from 'react';
import Card from './card.jsx';

function Section({id,title,cards,layout,section,type}){
    return ( 
        <section className="section">
            <h2 className="title">{title}</h2>
            <div className="content">
                {cards.map((card,i)=>{
                    return <Card key={i} name={card.name} title={card.title} content={card.content} bgColor={card.bgColor} icon={card.icon} bgImage={card.bgImage} uid={card.uid} section={section} type={type}></Card>
                })}
            </div>
        </section>
    );
}

export default Section;