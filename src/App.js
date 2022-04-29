import './App.scss';
import { Component } from 'react';
import { SearchBox } from './components/searchbox/searchbox.compnent';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
			console.log(users);
			this.setState({
				monsters: users
			});
		});
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


		return (
			<div className="App">
				<div className='App_heading'>Monsters</div>
				<SearchBox placeholder='Search Monsters' handleChange={e => this.setState({ searchField: e.target.value })} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
