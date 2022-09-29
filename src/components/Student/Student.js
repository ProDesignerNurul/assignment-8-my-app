import React from 'react';
// import { addToDb } from '../../utilities/FakeDb';
import './Student.css';

const Student = (props) => {
    const {student, handleAddToCard} = props;
    const {id, name, img, descriptions, spendTime} = props.student;
    // const addToCard = () => {
    //     addToDb(id);
    // }
    // const handleAddToCard = () => {
    //     console.log('added card')
    // }
    return (
        <div className='student-card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Spend Time : {spendTime}s</h4>
            <p>{descriptions}</p>
            <button onClick={() => handleAddToCard(student)} className='add-btn'>Add To Card </button>
        </div>
    );
};

export default Student;