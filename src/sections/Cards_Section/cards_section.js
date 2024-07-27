import React from 'react';
import RetreatCard from '../../components/ui/retreatCard';
import './cards_section.css';


const CardsSection = ({retreats}) => {
  
  return (
    <>
      <div className='cards_section'>
        {retreats.map((retreat) => (
          <RetreatCard
            key={retreat.id}
            title={retreat.title}
            description={retreat.description}
            date={retreat.date}
            duration={retreat.duration}
            location={retreat.location}
            price={retreat.price}
            imageUrl={retreat.image}
          />
        ))}
      </div>
    </>
  );
};

export default CardsSection;
