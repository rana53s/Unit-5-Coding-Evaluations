import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from 'axios';
import styled  from "styled-components";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [book, setBook] = useState([]);

  useEffect(() => fetchData(), []);

  async function fetchData() {
    await axios.get("http://localhost:8080/books").then((res) => {
      setBook([...res.data])
    })
  }

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:1rem;
    margin: auto;
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
        {book.map((e) => <BookCard key={e.id} id={e.id} title={e.title} price={e.price} imageUrl={e.imageUrl} >{e.title}</BookCard>)}
      </Main>
    </div>
  );
};


//id, imageUrl, title, price