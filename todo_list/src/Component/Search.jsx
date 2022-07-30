import React from "react"

function Search() {
    return (
        <>
            <form className="form-inline my-2 my-lg-0" >
                <input type="search" className="form-control mr-sm-2"  placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </>
    );
}

export default Search;


