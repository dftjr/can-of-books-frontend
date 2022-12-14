import React from "react";
import { Modal, Form, Card, Container, Button } from "react-bootstrap";
import { Component } from "react";

class BookFormModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: '',
    }
  }

  handleTitleInput = (e) => {
    console.log(e);
    this.setState({
      title: e.target.value,
    });
  }

  handleDescriptionInput = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  handleStatusInput = (e) => {

    this.setState({
      status: e.target.value,
    });
  }

  checkDisable = () => {
    if (this.state.title.length < 1 || this.state.description.length < 1 || this.state.status.length < 1) {
      return false;
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    };
    this.props.onHide();
    this.props.handleCreateBook(book);
  } 

  render() {

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >

        <Container>
          <Card className="booksDisplay">
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter a book title"
                  type="text" 
                  required
                  input="title"
                  onInput={this.handleTitleInput}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter a brief description"
                  type="text"
                  input="description"
                  onInput={this.handleDescriptionInput}
                />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control placeholder="Enter a status description"
                  type="text"
                  input="status"
                  onInput={this.handleStatusInput}
                />
              </Form.Group>

              <Button
                disabled={this.state.title.length < 1 || this.state.description.length < 1 || this.state.status.length < 1}
                type="submit">
                Add my book!
              </Button>
            </Form>
          </Card>
        </Container>
      </Modal>
    )
  }
}

export default BookFormModal;
