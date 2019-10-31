import React from 'react'

const HogInfo = ({piggy}) => {
    return (
        <div>
            <p>Specialty: {piggy.specialty}</p>
            <p>Greased: {piggy.greased ? 'Yes' : 'No'}</p>
            <p>Weight: {piggy.weight}</p>
            <p>Highest Medal Achieved: {piggy['highest medal achieved']}</p>
        </div>
    )
}

export default HogInfo