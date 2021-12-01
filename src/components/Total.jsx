import React from 'react'

function Total({checkOut, ...props}) {
    const total = checkOut.reduce((sum, elem) => {
        return sum + (elem.quantity * elem.calories)
    }, 0)
    return (
        <div>
            <h1>Total's foods</h1>
            {
                checkOut.map((elem)=>{
                    const {name, quantity, calories} = elem
                    return(
                        <li>
                            {quantity} {name} = {calories}
                        </li>
                    )
                })
            }
            <h3>Total Calories: ${Math.round(total)} </h3>
        </div>
    )
}

export default Total
