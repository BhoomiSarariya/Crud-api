import React from 'react';
import './App.css';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { Modal, Form, Row, Col } from 'react-bootstrap';
class AddUserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {
			id: '',
			title: '',
			body: '',
		}
		if (props.product) {
			this.state = this.props.user

		} else {
			this.state = this.initialState;
		}
	}

	
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	 handleSubmitAdd=(e)=>{
		e.preventDefault();
		const { title, body } = this.state;
		try {
			const response = axios.post('http://192.168.2.65:3030/posts', { title, body });
			console.log(response);
			setTimeout(
				this.props.handleClose()
			,200) 
		}
		
		catch (error) {
			console.log(error);
		}
	}

	UNSAFE_componentWillReceiveProps(props) {
		// console.log("function", props.handleShowAdd);
	}

	render() {
		const { handleClose } = this.props
		return (
			<>
				<Modal show={this.props.statusAdd} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={(e) => this.handleSubmitAdd(e)} >
							<Row>
								<Col>
									<Form.Control placeholder="First name" name="title" onChange={(e) => this.handleChange(e)} />
								</Col>
								<Col>
									<Form.Control placeholder="Last name" name="body" onChange={(e) => this.handleChange(e)} />
								</Col>
							</Row>
							<br />
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button type="submit" variant="primary" onClick={(e)=>this.handleSubmitAdd(e)}>
							Add User
							</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default AddUserDetail;
