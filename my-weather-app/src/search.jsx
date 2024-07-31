import React, {useState, useEffect} from 'react'

function Search(){
    const [search, setSearch] = useState('');

    const temperature = document.querySelector(".temperature");

    const handleOnChange = (searchData) => {
        setSearch(searchData.target.value);
        // onSearchChange(searchData.target.value)
    }
    const handleSubmit = () => {
        console.log("Input value:", search)
        setSearch('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Do something with the input value
            console.log('Input Value on Enter:', search);
            setSearch('');
        }
    };

    return(
        <>
        <div>
            <input
                className='search-bar' 
                type="text" 
                placeholder='Search for location'
                value={search}
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}
            />
            <button onClick={handleSubmit} className='search-button' ><img className='search' src="./src/assets/search.png" alt="" /></button>
        </div>
        </>
    )
}

export default Search