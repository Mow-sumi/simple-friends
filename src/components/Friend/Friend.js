import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{ name ,email,id} = props.data;
    const history = useHistory();

    const handleClick = (friendId)=>{
       const url = `/friend/${friendId}`;
       history.push(url);
    }
    const friendStyle ={
        border:'1px solid purple',
        borderRadius: '20px',
        margin:'20px',
        padding:'20px',
        backgroundColor: 'pink',

    }
    return (
        <div style={friendStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <Link to ={`/friend/${id}`}></Link>
           <button onClick ={()=>handleClick(id)}>Click Here</button>
           
        </div>
    );
};

export default Friend;