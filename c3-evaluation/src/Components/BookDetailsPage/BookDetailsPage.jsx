import { useEffect, useState } from "react";
// import { BookCard } from "../BookCard/BookCard";
import axios from 'axios';
import { useParams } from "react-router";
import { NotFound } from "../NotFound/NotFound";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const { id } = useParams();
  const [book, setBook] = useState({
    title:"",
    imageUrl:"",
    description:"",
    reviews:[""],
    author:"",
    price:0,
    section:"0",
    isbnNumber:0,
    id:0
  });

  useEffect(() => fetchData(), [id]);

  async function fetchData() {
    await axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setBook(res.data)
    })
  }

  if(book.title.length===0)return <NotFound/>
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{"ISBN number : " +  book.isbnNumber}</div>
        <ul className="reviews">
          {book.reviews && book.reviews.map((e, i) => <li key={i} >{ e}</li>)}
        </ul>
      </div>
    </>
  );
};
