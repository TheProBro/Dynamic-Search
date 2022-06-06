import React from "react";
import Cardlist from './Cardlist';
import Scroll from './Scroll';
import Searchbox from './searchbox';
// const App=()=>{
//     return(
//     <div className="tc">
//         <h1>RoboFriends</h1>
//         <Searchbox/>
//         <Cardlist robots={robots}/>
//     </div>
//     );
// }

class App extends React.Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: '',
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		}).then(users =>{
			this.setState({robots: users});
		})
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	render() {
		const filtered=this.state.robots.filter((robots)=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<Cardlist robots={filtered} />
				</Scroll>
			</div>
		);
	}
}

export default App;