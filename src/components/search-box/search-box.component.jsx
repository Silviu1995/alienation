
import "./search-box.style.css"
const SearchBox = ({onSearchChange, className,placeholder}) => (
            <div>
                <input 
                placeholder= {placeholder}
                className={` search-box ${className}`}
                onChange={onSearchChange}
         />
            </div>
        )
    


export default SearchBox;