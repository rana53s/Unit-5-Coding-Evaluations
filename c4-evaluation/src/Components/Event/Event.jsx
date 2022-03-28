// This is an event details page which has its own route
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Event = (id, title, location, image, theme, time) => {
  const EventLink = styled(Link)`
    width: 300px;
  `;

  return (
    <EventLink to={`/loginsignup${id}`}>
      <div className="eventContainer">

        <img src={image} style={{ width: '280px' }} alt="#" />
        <h2>{title}</h2>
        <h3>{location}</h3>
        <h4>{theme}</h4>
        <h5>{time}</h5>
        
        {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

        {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
        <button className="unsubscribe">Unsubscribe</button>
        <button className="subscribe" onClick={() => {}}>
          Subscribe
        </button>
      </div>
    </EventLink>
  );
};
