// import React from 'react';
// import { Container, Carousel } from 'react-bootstrap';

// class Books extends React.Component {
//   render() {
//     console.log(this.state.books);
//     let carouselItems = this.state.books.map((book, index) => (
//       <Carousel.Item key={book._id} book={book}>
//         <img
//           className="d-block w-100"
//           src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
//           alt="Books"
//         />
//         <Carousel.Caption>
//           <h3>Title: {book.title}</h3>
//           <h3>Description: {book.description}</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     ))
//     return (
//       <></>
//     )
//   }


// class Book extends React.Component {
//   render() {
      // this.props.deleteBook(this.props.book._id)
//     return (
//       <>
//         {this.props.books.length > 0 ? (
//           <Container>
//             <Carousel>
//               {carouselItems}
// <Button> onClick={() => this.props.deleteBook(this.props.book._id)}>Delete this book!></Button>
//             </Carousel>
//           </Container>
//         ) : (
//           <Container>
//             <h3>No Books Found :(</h3>
//           </Container>
//         )
//         }
//       </>
//   }
// }
// }
// export default Book;
