import React from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Modal,Form } from 'react-bootstrap';
class DeleteUserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}

	handleSubmitDelete(e) {
		e.preventDefault();
		console.log(this.props.id);
		axios.delete(`http://192.168.2.65:3030/posts/${this.props.id}`)
			.then(res => {
				this.setState({ user_more:res.data ,
					statusDelete:false
				});
			})
			.then(
				setTimeout(
					this.props.handleClose()
				,200)
			)
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				//	console.log("");
			})
	}
	render() {
		const { handleClose ,title,body} = this.props
		return (
			<>
				<Modal show={this.props.statusDelete} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						"Are you sure you want to delete "{title} {body}"?"
						</Modal.Body>
					<Modal.Footer>
					<Form onSubmit={(e) => this.handleSubmitDelete(e)} >
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button variant="primary" type="submit" onClick={(e)=>this.handleSubmitDelete(e)} >
							Confirm Delete
							</Button>
					</Form>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default DeleteUserDetail;