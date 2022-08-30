import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './BestBooks.css';
import { Container } from 'react-bootstrap';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log(results);
      this.setState({
        books: results.data
      });
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */
    console.log(this.state.books);
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
        </Carousel.Caption>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

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
