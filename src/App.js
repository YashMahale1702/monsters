import "./App.scss";
import { Component } from "react";
import { SearchBox } from "./components/searchbox/searchbox.compnent";
import { CardList } from "./components/card-list/card-list.component";
import { Loading } from "./components/loading/loading.component";
import { motion } from "framer-motion";

const item = {
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	hidden: { opacity: 0, y: 100, transition: { duration: 1 } },
};

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
			isInit: false,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				console.log(users);
				this.setState({
					monsters: users,
				});
			})
			.then(() => {
				this.setState({
					isInit: true,
				});
			});
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return this.state.isInit ? (
			<motion.div
				className="App"
				initial="hidden"
				animate="visible"
				variants={item}
			>
				<div className="App_heading">Monsters</div>
				<SearchBox
					placeholder="Search Monsters ..."
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</motion.div>
		) : (
			<Loading />
		);
	}
}

export default App;
