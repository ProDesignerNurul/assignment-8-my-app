import React, { useEffect, useState } from 'react';
import Card from '../Cerd/Card';
import Student from '../Student/Student';
import './Students.css';

const Students = () => {
    // const students = [
    //     {
    //       "id": 0,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 30,
    //       "img": "https://hamptonprep.school/wp-content/uploads/2022/03/istockphoto-1278978402-612x612-1-612x408.jpg"
    //     },
    //     {
    //       "id": 1,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 60,
    //       "img": "https://sponsored.chronicle.com/lifelonglearning/assets/UtzDNE3HUI/adults-learning-612x612-612x408.jpeg"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 25,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1226796079-612x408.jpg"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 45,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1029717906-612x408.jpg"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 20,
    //       "img": "https://practicalesg.com/wp-content/uploads/2021/11/image5_diversemeeting_original-612x408.jpg"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 40,
    //       "img": "https://media.istockphoto.com/photos/woman-studying-late-at-night-picture-id623201854?k=20&m=623201854&s=612x612&w=0&h=7bDc67tFFrfVpEr8xQvT7M_c6MxevVVBckheMJQTszk="
    //     },
    //     {
    //       "id": 0,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 30,
    //       "img": "https://hamptonprep.school/wp-content/uploads/2022/03/istockphoto-1278978402-612x612-1-612x408.jpg"
    //     },
    //     {
    //       "id": 1,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 60,
    //       "img": "https://sponsored.chronicle.com/lifelonglearning/assets/UtzDNE3HUI/adults-learning-612x612-612x408.jpeg"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 25,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1226796079-612x408.jpg"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 45,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1029717906-612x408.jpg"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 20,
    //       "img": "https://practicalesg.com/wp-content/uploads/2021/11/image5_diversemeeting_original-612x408.jpg"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 40,
    //       "img": "https://media.istockphoto.com/photos/woman-studying-late-at-night-picture-id623201854?k=20&m=623201854&s=612x612&w=0&h=7bDc67tFFrfVpEr8xQvT7M_c6MxevVVBckheMJQTszk="
    //     },
    //     {
    //       "id": 0,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 30,
    //       "img": "https://hamptonprep.school/wp-content/uploads/2022/03/istockphoto-1278978402-612x612-1-612x408.jpg"
    //     },
    //     {
    //       "id": 1,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 60,
    //       "img": "https://sponsored.chronicle.com/lifelonglearning/assets/UtzDNE3HUI/adults-learning-612x612-612x408.jpeg"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 25,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1226796079-612x408.jpg"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 45,
    //       "img": "https://aadi.org.in/assets/images/istockphoto-1029717906-612x408.jpg"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 20,
    //       "img": "https://practicalesg.com/wp-content/uploads/2021/11/image5_diversemeeting_original-612x408.jpg"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Guljar Ahmed",
    //       "descriptions": "pore dibo",
    //       "spendTime": 40,
    //       "img": "https://media.istockphoto.com/photos/woman-studying-late-at-night-picture-id623201854?k=20&m=623201854&s=612x612&w=0&h=7bDc67tFFrfVpEr8xQvT7M_c6MxevVVBckheMJQTszk="
    //     }
    //   ]
    const [students, setStudents] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    
    const handleAddToCard = (student) => {
        console.log(student)
        const newCard = [...card, student]
        setCard(newCard);
    }
    return (
        <div className='students-area'>
            <div>
                <div className='heading-title'>
                    <h1>Our <span>Study</span> Club</h1>
                    <h3>Any Person Anytime Join With US</h3>
                </div>
                <div className='students-left-side'>
                    {
                        students.map(student => <Student
                            key={student.id}
                            student={student}
                            handleAddToCard={handleAddToCard}
                        ></Student>)
                    }
                </div>
            </div>
            <div className='students-right-side'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Students;