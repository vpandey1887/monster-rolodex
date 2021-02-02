import './App.css';
import React,{ Component } from 'react'
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
 constructor()
 {
   super();   
   this.state={
    monsters:[],
    searchField:''   
   }  
   //this.handleChange=this.handleChange.bind(this);    
 }
 handleChange=(e)=>this.setState({searchField: e.target.value})
 
 componentDidMount()
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users=>this.setState({monsters:users}))
   }
 render () {
   const{monsters, searchField}=this.state;
   const filterMonsters= monsters.filter(monster=>monster.name.toLowerCase()
                                                 .includes(searchField.toLocaleLowerCase())
                                        )
     return (
    <div className="App"> 
    <h1>Monsters Rolodex</h1>
    <SearchBox placeholder='search monster' handleChange = { this.handleChange  } ></SearchBox>
   
    <CardList monsters={filterMonsters}>    
    </CardList>
    </div>
  );
    }

   
}

export default App;
