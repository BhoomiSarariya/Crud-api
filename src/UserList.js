import React from 'react';
import './App.css';
import axios from 'axios';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			id: 0,
			title: '',
			body: '',
			statusEdit: false,
			statusDelete: false,
			statusAdd: false
		}
	}
	componentDidMount() {
		axios.get('http://192.168.2.65:3030/posts')
			.then(response => {
				this.setState({
					user: response.data.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {

			});
	}
	render() {
		return (
			<div className="user-list col-md-3 col-sm-3">
				<div className="row">
					{this.state.user.map((subitem, i) =>
						<>
							<input type="button" className="btn btn-defualt col-sm-5 col-md-9" key={i} onClickCapture={(e) => this.props.userData(subitem._id, subitem.title, subitem.body, e)}
								value={subitem.title + "  " + subitem.body} />
							<button className="btn btn-defualt col-sm-1 col-md-1" onClick={(e) => this.props.handleShow(subitem._id, e)}><FontAwesomeIcon icon={faEdit} /></button>
							<button className="btn btn-defualt col-sm-1 col-md-1" onClick={(e) => this.props.handleShowDelete(subitem._id, e)}><FontAwesomeIcon icon={faTrash} /></button>
						</>
					)}
					<button className="btn btn-defualt btn-add" onClick={(e) => this.props.handleShowAdd(e)} ><FontAwesomeIcon icon={faUserPlus} /></button>
				</div>
			</div>
		)
	}
}
export default UserList;