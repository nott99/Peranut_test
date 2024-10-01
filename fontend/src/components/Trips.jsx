import React,{ useEffect ,useState} from "react"
import axios from "axios";
import './Card.css'; 

export default function Trips() {
    const [trips, setTrips] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            get_trips(inputValue)
        }
    };

    useEffect(() => {
      get_trips(); // Call the function when the component mounts
  
      // Optionally, you can return a cleanup function if you need to clean up something when the component unmounts
      return () => {
        // Cleanup code (if needed)
      };
    }, []); // Empty dependency array to run only once on mount
  
    function get_trips(keyword) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/api/trips${keyword ? `?keyword=${encodeURIComponent(keyword)}` : ''}`,
        headers: {},
      };
  
      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setTrips(response.data); // Update the trips state with fetched data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  return (
    <>
     <input
            className="input"
            placeholder="Type something..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
 {trips.map((trip) => (
  <div className="card" key={trip.id}>
    <div className="card-content">
      <img
        src={trip.photos[0]} 
        alt={`Main image of ${trip.title}`} 
        className="card-image"
      />
      <div className="text-content">
        <h2 className="card-title">{trip.title}</h2>
        <p className="card-description">
          {trip.description}
        </p>
        <div className="tags">{"หมวดหมู่: " }
          {trip.tags.map((tag, index) => (
            <a key={index} href={`#${tag}`} className="tag">
              {tag}
            </a>
          ))}
        </div>
        <div className="small-images">
          {trip.photos.slice(1).map((photo, index) => (
            <img
              key={index} 
              src={photo}
              alt={`Thumbnail ${index + 1} of ${trip.title}`} 
              className="small-image"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
))}




</>
  )
}
