import React from 'react';
import './App.css';
import axios from 'axios';
import AddUserDetail from './AddUserDetail';
import DeleteUserDetail from './DeleteUserDetail';
import EditUserDetail from './EditUserDetail';
import avatar from './avatar.png';
class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}

	UNSAFE_componentWillReceiveProps(props) {
		// console.log("user_id", this.props);

	}
	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			axios.get(`http://192.168.2.65:3030/posts/${this.props.id}`)
				.then(response => this.setState({
					user_more: response.data,
					title: response.data.title,
					body: response.data.body,
					id: response.data.id,
				})
				)
				.catch(function (error) {
					console.log(error);
				})
				.finally(function () {
					//	console.log("");
				})
		}
	}
	render() {
		const { title, body } = this.state
		return (
			<>
				<div className="contaier row col-md-9 col-sm-9">
					<div className="card col-md-5 col-sm-5">
						<div className="card-img-block">
							<img className="card-img-top" src={avatar} alt="user"></img>
						</div>
						<h4 className="card-title"> {title}</h4>
						<div className="card-body ">
							<p className="card-text">{body}</p>
						</div>
					</div>
				</div>

				{/* for edit */}
				<EditUserDetail
					handleClose={this.props.handleClose}
					statusEdit={this.props.statusEdit}
				/>

				{/* for delete */}
				<DeleteUserDetail
					handleClose={this.props.handleClose}
					statusDelete={this.props.statusDelete}
				/>
				{/* for add */}
				<AddUserDetail
					handleClose={this.props.handleClose}
					statusAdd={this.props.statusAdd}
					handleShowAdd={this.props.handleShowAdd}
					handleChange={this.props.handleChange}
					handleSubmitAdd={this.props.handleSubmitAdd}
				/>

			</>
		)
	}
}
export default UserDetail;
