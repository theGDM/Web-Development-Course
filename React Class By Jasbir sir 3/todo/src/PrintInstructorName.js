import React from 'react';

//child functional component
//props is a property object
//code read bottom to top
function PrintName(props) { //return JSX
    let { name, age } = props
    return (<h1>Name of instructor is {name} and age is {age}</h1>)
}

//Example of functional component!(Parent Component)
function PrintInstructorName() {
    return (
        <div>
            {/* child components(PrintName) */}
            <PrintName name="Summeet Malik" age={35} />
            <PrintName name="Jasbir Bhaiya" age={28} />
            <PrintName name="Jitendra Punia" age={30} />
            <PrintName name="Rajneesh Bhaiya" age={26} />
        </div>
    )
};

export default PrintInstructorName;