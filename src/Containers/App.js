import React, {Component} from 'react'; 
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from '../Components/Scroll'; 
import ErrBoundary from './ErrBoundary'; 


class App extends Component{
	constructor(){
		super();	
		this.state = {
			Robots: [],
			SearchField: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({SearchField: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{return response.json();}).then(users=>{this.setState({Robots:users})})
	}

	render(){
		const {Robots, SearchField} = this.state;
		const filteredRobots = Robots.filter(robots=>{
			return robots.name.toLowerCase().includes(SearchField.toLowerCase());
		})
			return(!Robots.length)?
			<h1>Loading...</h1> : 
			(
				<div className='tc'>
					<header className="f1">Robo Friends</header>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<ErrBoundary>
							<CardList Robots={filteredRobots} />
						</ErrBoundary>
					</Scroll>	
				</div>
			);
	}
}

export default App; 