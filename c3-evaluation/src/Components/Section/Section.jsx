import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const { section } = useParams();

  const [book, setBook] = useState([]);
  // get all books when user lands on the page
  // populate them as mentioned below

  useEffect(() => fetchData(), [section]);

  async function fetchData() {
    await axios.get("http://localhost:8080/books").then((res) => setBook([...res.data.filter(e => e.section === section)]))
  }

  const Main = styled.div`
    /* Same as Homepage */
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:1rem;
    margin: auto;
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
        { section }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, 
        just like homepage but with books only belong to this Section */}
        {book.map((e) => <BookCard key={e.id} id={e.id} title={e.title} price={e.price} imageUrl={e.imageUrl} >{e.title}</BookCard>)}
      </Main>
    </>
  );
};
