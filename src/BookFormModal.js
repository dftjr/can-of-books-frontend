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

  handleBookSubmit = (e) => {
    this.props.handleBookSubmit(e);
    console.log('this was sent');
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
                  // onInput={this.handleTitleInput}
                  input="title"
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter a brief description"
                  type="text"
                  // onInput={this.handleDescriptionInput}
                  input="description"
                />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control placeholder="Enter a status description"
                  type="text"
                  // onInput={this.handleDescriptionInput}
                  input="status"
                />
              </Form.Group>

              <Button
                disabled={false}
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
