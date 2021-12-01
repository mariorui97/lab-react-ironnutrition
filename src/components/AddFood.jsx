import React from 'react'

function AddFood({btnSubmit, ...props}) {    
    
 
    return (
        <div>
            <form onSubmit={btnSubmit}>
            <div className="field">
                <label className="label">Name</label>
                    <div className="control">
                        <input  className="input" name="name" type="text" placeholder="Enter food's name"/>
                    </div>
            </div>

            <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input  className="input" name="calories" type="text" placeholder="Enter calories"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Image</label>
                <div className="control">
                    <input  className="input" name="image" type="text" placeholder="Enter image"/>
                </div>
            </div>

            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default AddFood
