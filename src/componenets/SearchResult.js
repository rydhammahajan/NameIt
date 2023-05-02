const SearchResult = (props) => {

    let array = props.searchArray.slice(0,16); 

    function CreateDiv(arr) {
        return (
            <a href = {`https://www.namecheap.com/domains/registration/results/?domain=${arr}`}  className="searchBox py-5 px-3 fs-5 d-flex justify-content-center align-items-center">
                {arr}
            </a>
        )

    }

    return (
        <div className = "searchResult d-flex flex-wrap gap-3 p-3 m-5 justify-content-around">
            {array.map((arr) => {
                return CreateDiv(arr);
            })}
        </div>
    )


}

export default SearchResult