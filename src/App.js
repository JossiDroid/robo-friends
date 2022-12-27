import React,{Component} from "react";
import Cardlist from "./components/Cardlist";
import SearchBox from "./components/SearchBox";
import './containers/App.css'
import Scroll from './components/Scroll'


class App extends Component {
     constructor()
    {   
        super()

        this.state = {

            robots: [],
            searchfield:''
        }
    }
     onSearchchange=(event) =>
    {   
     this.setState({searchfield:event.target.value})
    }
    componentDidMount()
    {       fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
        .then(users=>this.setState({robots:users}))
    }       
    render()
    {
        const filteredrobots = 
         this.state.robots.filter(robots =>
            {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });
            if(this.state.robots.length===0)
                return<h1>LOADING</h1>
            else{
        return(
            <div className="tc">
            <h1 className="blue">ROBO-FRIENDS</h1>
            <SearchBox Searchchange= 
              {this.onSearchchange}/>
            <Scroll>
            <Cardlist robots={filteredrobots}/>
            </Scroll>
            </div>
        );
    }
    
    }
    
}

export default App;