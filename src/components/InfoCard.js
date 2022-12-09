// make sure to import react, as well as useState for your component
// useState is one of the hooks we'll be using
import React, { useState } from 'react'

const InfoCard = (props)=> {
    // destructuring allows us to refer to each prop by key, without using props.firstName. Instead, we can just use 'firstName'
    const { firstName, lastName, hairColor } = props
    // let's use state to pass age
    const [age, setAge] = useState(props.age)
    return(
        <div>
            <h1>{ lastName }, {firstName}</h1>
            <ul>
                <li>Age: { age }</li>
                <li>Hair color: { hairColor }</li>
                <button onClick={(event)=> setAge(age + 1)}>Add a year!</button>
            </ul>
        </div>
    )
}
export default InfoCard