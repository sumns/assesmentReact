import React, { useState } from 'react';
import './App.css';

const movies = [
  { id: 1, title: 'Movie A', seats: 100 },
  { id: 2, title: 'Movie B', seats: 120 },
  // Add more movies
];

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
  };
  
  const handleSeatClick = (seat) => {
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    }
  };
  
  const totalCost = selectedSeats.length * 200; // Assuming each seat costs rs 200
  
  return (
    <div className="App">
      <h1>Movie Booking App</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div
            key={movie.id}
            className={`movie ${selectedMovie === movie ? 'selected' : ''}`}
            onClick={() => handleMovieSelect(movie)}
          >
            {movie.title}
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="seat-selection">
          <h2>Select Seats for {selectedMovie.title}</h2>
          <div className="seat-grid">
            {Array.from({ length: selectedMovie.seats }, (_, index) => (
              <div
                key={index}
                className={`seat ${selectedSeats.includes(index) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="summary">
            <h3>Booking Summary</h3>
            <p>Selected Movie: {selectedMovie.title}</p>
            <p>Selected Seats: {selectedSeats.map(seat => seat + 1).join(', ')}</p>
            <p>Total Cost: Rs{totalCost}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
