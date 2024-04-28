import logo from './logo.svg';
import './App.css';
import PersonCard from './component/PersonCard';
import { useState } from 'react';

function App() {
  const [peopleData, setPeopleData] = useState([
    { firstName: "Doe", lastName: "Jane", age: 45, hairColor: "Black" },
    { firstName: "Smith", lastName: "John", age: 88, hairColor: "Brown" },
  ]);

  const handleBirthday = (index) => {
    const updatedPeopleData = [...peopleData];
    updatedPeopleData[index].age += 1;
    setPeopleData(updatedPeopleData); 
    
  };

  return (
    <div className='App'>
      {peopleData.map((person, index) => (
        <PersonCard
          key={index} 
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
          birthday={() => handleBirthday(index)}
        />
      ))}
    </div>
  );
}

export default App;
