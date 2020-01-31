import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
class DeleteUserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}
	render() {
		const { handleClose } = this.props
		return (
			<>
				<Modal show={this.props.statusDelete} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						"Are you sure you want to delete this?"
						</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button variant="primary" onClick={handleClose}>
							Confirm Delete
							</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default DeleteUserDetail;