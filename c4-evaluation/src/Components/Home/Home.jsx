import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Event } from "../Event/Event";

export const Home = () => {
  const [meetup, setMeetup] = useState([]);
  useEffect(() => fetchMeetups(), []);

  const fetchMeetups = async () => {
    await axios.get("http://localhost:8080/meetups").then((res) => {
      console.log(res);
      setMeetup([...res.data]);
      
    });
  }

  return (
    <div className="homeContainer">
      {meetup.map(el => <div key={el.id} id={el.id} title={el.title} location={el.location} image={el.image} theme={el.theme} time={el.time}
        style={{ backgroundColor: 'teal' }}
      >
        <img src={el.image} alt="" style={{ width: '270px' }} />
        <h2>Title: {el.title}</h2>
        <h3>Location: {el.location}</h3>
        <h3>Theme: {el.theme} </h3>
        <h5>Time: {el.time}</h5>
      </div>)}
      {[]
        .filter() // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`/meetup/:id`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
