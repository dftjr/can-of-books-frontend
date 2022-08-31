import React from "react";
import { Modal, Form, Card, Container, Button } from "react-bootstrap";

class SubmitForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      activate: true
    }
  }

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
    e.preventDefault();
    // this.handleHideModal();
    console.log('this was clicked');
    const book = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    };
    console.log(book);
    this.props.onCreate(book);
  }

  render() {

    console.log(this.state.title);
    
    return (
      <Modal
        show={this.props.show}
      >
        <Container>
          <Card className="cardForm">
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter a book title"
                  type="text"
                  onInput={this.handleTitleInput}
                  input="title"
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter a brief description"
                  type="text"
                  onInput={this.handleDescriptionInput}
                  input="description"
                />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control placeholder="Enter a status description"
                  type="text"
                  onInput={this.handleDescriptionInput}
                  input="status"
                />
              </Form.Group>

              <Button
                disabled={false}
                type="submit"> Add my book!
              </Button>
            </Form>
          </Card>
        </Container>
      </Modal>
    )
  }
}

export default SubmitForm;
