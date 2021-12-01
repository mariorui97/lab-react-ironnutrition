import {React, useState} from 'react'

function FoodBox({foods, btnClick, ...props}) {

    const {name, calories, image} = foods
    const [qty, setQty] = useState(0)

    function handleQuantity(event){
        setQty(event.target.value)
    }

    return (
        <>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p> 
                                <strong>{name}</strong> <br/>
                                <small>{calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={qty} onChange={handleQuantity}/>
                        </div>
                        <div className="control">
                            <button onClick={() => {btnClick(foods, qty)}}className="button is-info">+</button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default FoodBox

