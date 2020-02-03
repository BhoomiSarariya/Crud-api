import React from 'react';
import './App.css';
import UserDetail from './UserDetail';
import UserList from './UserList';
import './App.scss';


class App extends React.Component {
	state = {
		user: [],
		id: 0||'',
		title: '',
		body: '',
		statusEdit: false,
		statusDelete: false,

	}
	userData = (p1, p2, p3, e) => {
		setTimeout(
			this.setState({
				id: p1,
				title: p2,
				body: p3,
				statusEdit: false,
				statusDelete: false,
				statusAdd: false
			})
			, 200);
	}
	handleClose = () => {
		this.setState({
			statusEdit: false,
			statusDelete: false,
			statusAdd: false
		})
	};
	handleShow = (p1,p2,p3, e) => {
		this.setState({
			id: p1,
			title: p2,
			body: p3,
			statusEdit: true,
		})
	}
	handleShowDelete = (p1,p2,p3, e) => {
		this.setState({
			id: p1,
			title: p2,
			body: p3,
			statusDelete: true,
		})
	}
	handleShowAdd = (e) => {
		this.setState({
			statusAdd: true,
		})
	}

	userInformation = () => {
		this.setState({
			id: this.state.id
		})
		console.log("userInformation", this.state.id, this.state.title);
	}
	render() {
		return (
			<div className="container-fluid App flex-container row" >
				<UserList userData={this.userData}
					handleShowAdd={this.handleShowAdd}
					handleShow={this.handleShow}
					handleClose={this.handleClose}
					handleShowDelete={this.handleShowDelete}
				/>
				<div className="user-data col-md-9 col-sm-9">
					<UserDetail id={this.state.id}
						handleShow={this.handleShow}
						handleShowAdd={this.handleShowAdd}
						handleChange={this.handleChange}
						handleSubmitAdd={this.handleSubmitAdd}
						handleClose={this.handleClose}
						handleShowDelete={this.handleShowDelete}
						// handleSave={this.handleSave}
						statusAdd={this.state.statusAdd}
						statusEdit={this.state.statusEdit}
						statusDelete={this.state.statusDelete}
					/>
				</div>
			</div>
		);
	}

}

export default App;
