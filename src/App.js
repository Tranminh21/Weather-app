import './App.css';
import axios from "axios"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {
 
  const [data,setData] =useState({})
  const [location,setLocation]=useState("")

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d47db4deb48d519e2cab8b43ceacff07`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className='App'>
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" 
        ></input>
      </div>
      <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.Y2fCRTfKqrs6mksEkEgylgHaEo&pid=Api&P=0" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <h1>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h1>
        </Card.Text>
        <Card.Text>
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        </Card.Text>
        {data.name !== undefined &&
        <>
        <Card.Text>
          {data.main ? <h1>{data.main.feels_like.toFixed()}°F</h1> : null}
            <p>Feels Like</p>
          </Card.Text>
          <Card.Text>
           {data.main ? <h1>{data.main.humidity}%</h1> : null}
            <p>Humidity</p>
          </Card.Text>
          <Card.Text>
            {data.wind ? <h1>{data.wind.speed.toFixed()} MPH</h1> : null}
            <p>Wind Speed</p>
          </Card.Text>
        </>
        }
        </Card.Body>
    </Card>
      </div>
    </div>
  );
}

export default App














