import React, { FC } from 'react';

interface IReservation {
  name: string;
}

const ReservationCard: FC<IReservation> = ({ name }) => {
  return (
    <div className='reservation-card-container'>
      <p>{name}</p>
    </div>
  );
};

export default ReservationCard;
