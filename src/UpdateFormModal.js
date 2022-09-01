import React from "react";
import { Modal, Form, Card, Container, Button } from "react-bootstrap";
import { Component } from "react";

class BookFormModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.status,
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

  handleBookEditSubmit = (e) => {
    e.preventDefault();
   
    let updatedBook = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    };
    this.props.onHide();
    this.props.updateBook(updatedBook);
  }

  render() {

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Container>
          <Card className="booksDisplay">
            <Form onSubmit={this.handleBookEditSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter a book title"
                  type="text"
                  input="title"
                  onInput={this.handleTitleInput}
                  defaultValue={this.props.book.title}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter a brief description"
                  type="text"
                  input="description"
                  onInput={this.handleDescriptionInput}
                  defaultValue={this.props.book.description}
                />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control placeholder="Enter a status description"
                  type="text"
                  input="status"
                  onInput={this.handleStatusInput}
                  defaultValue={this.props.book.status}
                />
              </Form.Group>

              <Button
                disabled={this.state.title.length < 1 || this.state.description.length < 1 || this.state.status.length < 1}
                type="submit">
                Complete Edit
              </Button>
            </Form>
          </Card>
        </Container>
      </Modal>
    )
  }
}

export default BookFormModal; 
