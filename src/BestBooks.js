import React from 'react';
import axios from 'axios';
import './BestBooks.css';
import { Container, Button, Carousel } from 'react-bootstrap';
import BookFormModal from './BookFormModal.js';

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  getBooks = async () => {
    try {
      let databaseBooks = await axios.get(`${SERVER}/books`);
      console.log(databaseBooks);
      this.setState({
        books: databaseBooks.data
      });
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  }

  handleCreateBook = async (book) => {
    try {
      console.log('this is working');
      let url = API_URL;
      let createdBook = await axios.post(url, book);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  }

  handleDeleteBook = async (id) => {
    try {
      console.log('this was clicked');
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      })
      this.getBooks();
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    this.handleHideModal();
    console.log('this was clicked');
    const book = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    };
    this.handleCreateBook(book);
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleShowModal = () => {
    this.setState({
      showModal: true
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    let carouselItems = this.state.books.map((book, index) => (
      <Carousel.Item key={book._id}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="Books"
        />
        <Carousel.Caption>
          <h3>Title: {book.title}</h3>
          <h3>Description: {book.description}</h3>
          <h3>Status: {book.status}</h3>
        <Button onClick={() => this.handleDeleteBook(book._id)}>Delete</Button>
        </Carousel.Caption>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <BookFormModal
          handleBookSubmit={this.handleBookSubmit}
          handleCreateBook={this.handleCreateBook}
          show={this.state.showModal}
          onHide={this.handleHideModal}
        /><Button
          onClick={this.handleShowModal}
        >Click Me</Button>
        

        {this.state.books.length > 0 ? (
          <Container>
            <Carousel>
              {carouselItems}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
