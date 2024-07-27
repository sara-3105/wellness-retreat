import React from 'react'
import './retreatCard.css'
import { formatDateRange } from '../utils/formatDate';

const RetreatCard = ({ title, description, date, duration, location, price, imageUrl }) => {
  const formattedDateRange = formatDateRange(date, duration); // formatting the date 
  return (
    <div className='retreatCard'>
    <img src={imageUrl} alt=''  className='retreatImage'></img>
    <p className='retreatTitle'>{title}</p>
    <p className='retreatDescription'>{description}</p>
    <p className='retreatDate'>Date : {formattedDateRange}</p>
    <p className='retreatLocation'>Location : {location}</p>
    <p className='retreatPrice'>Price : {price}</p>
    </div>
  )
}

export default RetreatCard