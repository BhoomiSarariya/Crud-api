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
	onTodoChange = (e) => {
		this.setState({
			[e.target.name]: [e.target.value],
		})
	}
	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
		axios.get(`http://192.168.2.65:3030/posts/${this.props.id}`)
			.then(res => {
				const user_more = res.data;
				this.setState({ user_more });
			})
		}
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
						<Form >
							<Row>
								<Col>
									<Form.Control placeholder="First name" name="title" ref={this.input} defaultValue={newtitle} onChange={e => this.onTodoChange(e)} />
								</Col>
								<Col>
									<Form.Control placeholder="Last name" name="body" ref={this.input} defaultValue={newbody} onChange={e => this.onTodoChange(e)} />
								</Col>
							</Row>
							<br />
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