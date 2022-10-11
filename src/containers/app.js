import { useEffect, useState } from "react";
import CardList from "../components/card-list/card-list.component";
import SearchBox from "../components/search-box/search-box.component";
import "./app.css"

const App = () => {
console.log('render')

 const [searchField, setSearchField] = useState('');
 const [monster, setMonster] = useState([]);
 const [filtredMonsters, setFiltredMonsters] = useState(monster);

useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonster(users)) 
},[])

useEffect(() => {
        console.log('se foloseste')
        const newFiltredMonsters = monster.filter((monster) => {
                return monster.name.toLocaleLowerCase().includes(searchField)
               
                   });
        setFiltredMonsters(newFiltredMonsters)   ;
},[monster,searchField])



 const   onSearchChange = (event)=> {
        const searchFieldString = event.target.value
        setSearchField(searchFieldString)
        }


           

    return (
                <div className="App">
                <div className="title">ALIENATION</div>
                <SearchBox onSearchChange={onSearchChange} placeholder='Search your monster' className='monster-seach.box'/>
                <CardList filtredMonsters={filtredMonsters} />
                </div>
    )

}

// class App extends Component {
//     constructor() {
//         super();
//         this.state ={
//             monster:[],
//             searchField:''
           
//         }
        
//     }

//     componentDidMount() {
        
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => this.setState(()=> { 
//             return {monster:users}
//         },  
//         )) 
       
//     }

//     onSearchChange = (event)=> {
//         console.log(event.target.value)
//         const searchField = event.target.value
//         this.setState({searchField})
//         }


//     render(){
    
//     const {monster,searchField}= this.state;
//     const {onSearchChange}=this;
//     const filtredMonsters = monster.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//        <div>
//         <div className="title">ALIENATION</div>
//         <SearchBox onSearchChange={onSearchChange} placeholder='Search your monster' className='monster-seach.box'/>
//         <CardList filtredMonsters={filtredMonsters} />
//         </div>
//     ); 
//     }
// }


export default App;