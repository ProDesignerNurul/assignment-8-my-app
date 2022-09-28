import React from 'react';
import './Student.css';

const Studend = (props) => {
    console.log(props)
    const {name, img, spendTime, descriptions } = props.student;
    return (
        <div className='student-card'>
            <img src={img} alt="" />
            <h2>Title : {name}</h2>
            <p>Description : {descriptions}</p>
            <p>Hour : {spendTime}</p>
        </div>
    );
};

export default Studend;