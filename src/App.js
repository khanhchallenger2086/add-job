import React, { Component } from "react";
import AddJob from "./components/AddJob";
import Search from "./components/Search";
import Sort from "./components/Sort";
import TableList from "./components/TableList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			toggleForm: true,
			// filter: '',
			// filterOfName: '',
			filterName : '',
			filterStatus : '1',
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

	onToggleForm = () => {
		this.setState({
			toggleForm : !this.state.toggleForm
		})
	}


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

	onCloseForm = (value) => {
		this.setState({
			toggleForm : value
		})
	}

	onDelete  =  (index) => {
		var data = this.state.data;
		data.splice(index , 1);

		this.setState({
			data: data
		})
		
		localStorage.setItem( "data",  JSON.stringify(data))
	}


	onFilter = (filterStatus, filterName) => {
		this.setState({
			filterName: filterName,
			filterStatus: filterStatus === "1" ? true : filterStatus === "all" ?  'all' : false 
		})
	}


	render() {
		var { data , toggleForm, filterName , filterStatus } = this.state;

		if ( filterStatus === true ) {
			data = data.filter(dataItem =>  dataItem.status === true)
		} else if (filterStatus === false) {
			data = data.filter(dataItem =>  dataItem.status === false)
		} else if (filterStatus === 'all') {
			data = data
		}

		if (filterName !== '') {
			data = data.filter((dataItem) =>  { return dataItem.name.indexOf(filterName) !== -1 }) 
		} 

		return (
			<div>
				<div className="container">
					<div className="row">
						<h1 className="mb-5 mt-5 text-center">Quản lý</h1>
						<hr />
						<div className={ toggleForm === true ? "col-4" : "" }>
							 {  toggleForm === true ? (
							 	
								<AddJob 
									addJob = { this.addJob } 
									onCloseForm = {this.onCloseForm}
							  
							  /> ) : '' }
						</div>

						<div className={ toggleForm === true ? "col-8" : "col-12" }>


							<h3 type="button" className="btn btn-primary mt-2" onClick={ this.onToggleForm }> + </h3>
							<h3 type="button" className="btn  ms-2 mt-2 bg-danger" onClick={ this.generateData }> + Generate Data </h3>

							<div className="row">
								<div className="col-8">
									<Search />
								</div>

								<div className="col-4">
									<Sort />
								</div>

								<div className="col-12">
									<TableList data = { data } 
									onDelete={ this.onDelete } 
									onFilter = { this.onFilter }
									 />
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
