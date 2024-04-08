import React, { Component } from "react";
import AddJob from "./components/AddJob";
import Search from "./components/Search";
import Sort from "./components/Sort";
import TableList from "./components/TableList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}


	generateData = () => {
		var data = [
			{
				id : '1',
				status : true,
				name : '1'
			},
			{
				id : '2',
				status : true,
				name : '1'
			},
			{
				id : '3',
				status : true,
				name : '1'
			},
		]

		localStorage.setItem( "data",  JSON.stringify(data))
	}

	componentWillMount = () => {
		var data =  JSON.parse(localStorage.getItem("data"));
		
		this.setState({
			 data  : data
		})

	}

	// onHandleChange = () => {
	// 	console.log(this.state.data);
	// }


	s4 = () => {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	genrateId = () => {
		return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
	}

	addJob = (name , status) => {
		var data = this.state.data;
		data.push({
			id: this.genrateId(),
			name: name,
			status: status
		})

		this.setState({
			data : data
		})

		localStorage.setItem( "data",  JSON.stringify(data))
	}


	render() {
		var { data } = this.state;
		return (
			<div>
				<div className="container">
					<div className="row">
						<h1 className="mb-5 mt-5 text-center">Quản lý công việc</h1>
						<hr />
						<div className="col-4">
							<AddJob addJob = { this.addJob } />
						</div>

						<div className="col-8">


							<h3 type="button" className="btn btn-primary mt-2" onClick={ this.onHandleChange }> + Thêm công việc</h3>
							<h3 type="button" className="btn  ms-2 mt-2 bg-danger" onClick={ this.generateData }> + Generate Data </h3>

							<div className="row">
								<div className="col-8">
									<Search />
								</div>

								<div className="col-4">
									<Sort />
								</div>

								<div className="col-12">
									<TableList data = { data }/>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
