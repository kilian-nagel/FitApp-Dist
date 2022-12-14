
import React, { Component } from 'react';
import { useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom';
import '../media/strength.jpg';
import { currentTrainingContext } from '../hooks/currentTrainingContext';

function Card({name,title,bgColor,bgImage,content,icon,section,type,uid}) {
    const {currentTrainingIndex,setCurrentTrainingIndex} = useContext(currentTrainingContext);

    const hasBgImg = bgImage ? 'linear-gradient(to bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.45))' : '';
    let style = {
        color:'white',
        backgroundColor:bgColor,
        backgroundImage:`${hasBgImg} , url(${bgImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
    }

    function handleClick(){
        if(type==="training"){setCurrentTrainingIndex(uid);}
    }

    return ( 
    <Link to={section} style={{textDecoration:'none'}} onClick={()=>handleClick()}>
        <div className={name+' card '} style={style}>
            <h2 className="title"><span className={'icon '+icon}></span> {title}</h2>
            <div className="content">
                <p className="text">{content}</p>
                <img src="" alt="" className="image" />
            </div>
        </div>
    </Link>
    );
}

export default Card;