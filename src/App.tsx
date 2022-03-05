import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from './features/reservationSlice';
import { RootState } from './app/store';
import './index.scss';
import ReservationCard from './components/ReservationCard';
import { v4 as uuid } from 'uuid';

function App() {
  const [reservationInput, setReservationInput] = useState('');

  const dispatch = useDispatch();

  const reservations = useSelector((state: RootState) => state.reservations.value);

  const handleAddReservation = () => {
    if (!reservationInput) {
      return;
    } else {
      dispatch(addReservation(reservationInput));
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map(name => (
                <ReservationCard name={name} key={Math.random()} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input value={reservationInput} onChange={e => setReservationInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          <div className='customer-food-card-container'>
            <p>Selena Gomez</p>
            <div className='customer-foods-container'>
              <div className='customer-food'></div>
              <div className='customer-food-input-container'>
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
