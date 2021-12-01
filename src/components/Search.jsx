import React from 'react'

function Search({btnSearch, ...props}) {
    return (
        <div>
            <input onChange={btnSearch} type="text" placeholder="Search book"/>
        </div>
    )
}

export default Search
