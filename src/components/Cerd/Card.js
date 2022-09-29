import React from 'react';
import './Card.css';
import logo from '../../image/profile.jpg';


const Card = ({ card }) => {
    // console.log(card)

    let total = 0;
    for (const student of card) {
        total = total + student.spendTime;
    }
    return (
        <div className='right-side-area'>
            <div>
                <div className='profile-details'>
                    <img  src={logo} alt="" />
                    <div>
                    <h3>MD Nurul Amin</h3>
                    <p>Front End Developer</p>
                    </div>
                </div>
                <div className='owner-details'>
                    <div>
                        <h4>W-70k</h4>
                        <h4>H-5.7</h4>
                        <h4>Age-27</h4>
                    </div>
                </div>
            </div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time'>
                    <h3>25</h3>
                    <h3>30</h3>
                    <h3>15</h3>
                    <h3>10</h3>
                    <h3>20</h3>
                </div>
            </div>
            <div className='right-side-card-area'>
                <h2>Exercise Details</h2>
                {/* <p>Card Length : {card.length}</p> */}
                <p className='total-hour'>Exercise time : <span>{total}</span> seconds</p>
                <p className='total-hour'>Break time : <span>0</span> seconds</p>
                <button>
                    <h2>Activity Complated</h2>
                </button>
            </div>
        </div>
    );
};

export default Card;