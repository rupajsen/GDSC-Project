import React from "react";
import './App.css';
class App extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Create an application which fetches and displays a text from the given URL </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					Title: { item.title },<div></div>
					Body: { item.body }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
