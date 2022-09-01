import React from "react";
import { Modal, Form, Card, Container, Button } from "react-bootstrap";
import { Component } from "react";

class BookFormModal extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: null,
  //     description: null,
  //     activate: true
  //   }
  // }

  // handleTitleInput = (e) => {
  //   let input = e.target.value;
  //   console.log(input)
  //   this.setState({
  //     title: input,
  //   });
  // }

  // handleDescriptionInput = (e) => {
  //   let input = e.target.value;
  //   console.log(input);
  //   this.setState({
  //     description: input,
  //   });
  // }

  // handleStatusInput = (e) => {
  //   let input = e.target.value;
  //   console.log(input);
  //   this.setState({
  //     status: input,
  //   });
  // }

  // handleBookEditSubmit = (e) => {
  //   this.props.handleBookEditSubmit(e);
  //   console.log('this was sent');
  // }

  handleBookEditSubmit = (e) => {
    e.preventDefault();
    let bookToEdit = this.props.book;
    console.log(bookToEdit)
    bookToEdit = {
      ...bookToEdit,
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    // this.props.onHide();
    this.props.updateBook(bookToEdit);
  }

  render() {

    console.log(this.props.book);
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
                  // onInput={this.handleTitleInput}
                  input="title"
                  defaultValue={this.props.book.title}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter a brief description"
                  type="text"
                  // onInput={this.handleDescriptionInput}
                  input="description"
                  defaultValue={this.props.book.description}
                />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control placeholder="Enter a status description"
                  type="text"
                  // onInput={this.handleDescriptionInput}
                  input="status"
                  defaultValue={this.props.book.status}
                />
              </Form.Group>

              <Button
                disabled={false}
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
