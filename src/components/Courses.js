import React, { useState } from 'react';
import fakeData from './FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faListAlt } from '@fortawesome/free-solid-svg-icons'


const Courses = (props) => {
    const [courses] = useState(fakeData);
    //const {img, cost, instructor, totalEnrolled, lessons} = props.course;
    const addToCart = props.addToCart;
    const cart = props.cart;
    const removeFromCart = props.removeFromCart;
    const totalCost = props.totalCost;

    return (
        <>
        
        {courses.map((course, idx) => (
            <div key={idx} className="courses">
                <div className="single-courses">    
                    <img src={course.img} />
                    <div className="course-content">
                    <h4>{course.name}</h4>
                    <p>£{course.cost}</p>
                    <p>Instructor:  {course.instructor}</p>
                    <div className="fun-face">
                        <span className="students"><FontAwesomeIcon icon={faUsers} /> {course.totalEnrolled} Students</span>
                        <span className="lesson"><FontAwesomeIcon icon={faListAlt} /> {course.lessons} Lessons</span>
                    </div>
                    <button variant="success"  onClick={() => addToCart(course)}>Enroll Now</button>
                    </div>
                </div>      
            </div>
      ))}
        </>
    );
};

export default Courses;