

const Card = ({filtredMonsters}) => (
            <div className="card-list">
            
            {filtredMonsters.map((monster) => {
            const {name,id,email} = monster;
            return(
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )})} 
        </div>
        )
    


export default Card;