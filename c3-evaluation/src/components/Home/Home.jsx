import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then(res => {
      setBooks(res.data);
    });
  }, []);

  // const handleSort = () => {

  // }
  const Main = styled.div`
    display: grid;
    grid: repeat(4, 32%);
    gap: 3%;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((e) => (
          <Link to={"/books"}>
            <p>{e.title}</p>
            {<img src={e.imageUrl} alt="" />}
            {/* <h5>{e.reviews.map((r) => (
                      <p>r</p>
                  ))}</h5>
                  <h4>{ e.author}</h4> */}
            <p>{e.price}</p>
          </Link>
        ))}
      </Main>
    </div>
  );
};
