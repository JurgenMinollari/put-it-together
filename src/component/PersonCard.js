import React from 'react';

function PersonCard({ firstName, lastName, age, hairColor, birthday }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <h2>{firstName} {lastName}</h2>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
          <button onClick={birthday}>Birthday for {firstName} {lastName}</button>
        </div>
      );
}

export default PersonCard;