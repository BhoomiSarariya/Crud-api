import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Modal, Form, Row, Col } from 'react-bootstrap';
class EditUserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_more: [],
			...this.props.data
		}
	}
	onTodoChange(e) {
		this.setState({
			[e.target.name]: [e.target.value]
		})
	}
	render() {
		const { handleClose, user_first_name, user_last_name, user_email } = this.props
		let userEmail = user_email;
		let userFirstName = user_first_name;
		let userLastName = user_last_name;
		return (
			<>
				<Modal show={this.props.statusEdit} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form >
							<Row>
								<Col>
									<Form.Control placeholder="First name" name="user_first_name" value={userFirstName} onChange={e => this.onTodoChange(e)} />
								</Col>
								<Col>
									<Form.Control placeholder="Last name" name="user_last_name" value={userLastName} onChange={e => this.onTodoChange(e)} />
								</Col>
							</Row>
							<br />
							<Row>
								<Col>
									<Form.Control placeholder="Enter email" value={userEmail} />
								</Col>
							</Row>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
							</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default EditUserDetail;