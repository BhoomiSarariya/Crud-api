import React from 'react';
import './App.css';
import axios from 'axios';
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

	handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		})
	}

	componentDidUpdate(){
		setInterval(5000);
	}

	handleSubmitEdit = (e) => {
		axios.put(`http://192.168.2.65:3030/posts/${this.props.id}`,
			{
				title: this.state.title || this.props.title,
				body: this.state.body || this.props.body
			})
			.then(response => this.setState({ user_more: response.data }))
			.then(
				setTimeout(
					this.props.handleClose()
					, 200)
			)
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				//	console.log("");
			})
	}

	render() {
		const { handleClose, title, body } = this.props
		let newtitle = title;
		let newbody = body;
		return (
			<>

				<Modal show={this.props.statusEdit} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={(e) => this.handleSubmitEdit(e)}>
							<Row>
								<Col>
									<Form.Control placeholder="First name" name="title" ref={this.input} defaultValue={newtitle} onChange={e => this.handleChange(e)} />
								</Col>
								<Col>
									<Form.Control placeholder="Last name" name="body" ref={this.input} defaultValue={newbody} onChange={e => this.handleChange(e)} />
								</Col>
							</Row>
							<br />
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
						<Button variant="primary" type='submit' onClick={(e) => this.handleSubmitEdit(e)}>
							Save Changes
							</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
export default EditUserDetail;