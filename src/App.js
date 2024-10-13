import './App.css';
import VeteranForm from './components/VeteranForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [veterans, setVeterans] = useState([]);

  useEffect(() => {
    // Fetch veterans data on page load
    axios.get('http://localhost:5000/veterans')
      .then(response => setVeterans(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Create New Veteran</h1>
      <VeteranForm setVeterans={setVeterans} />
      
      <div className="veteran-list">
        <div className="veteran-header">
          <div>Name</div>
          <div>Student ID</div>
          <div>Benefit</div>
          <div>Required Docs</div>
        </div>
        {veterans.map(veteran => (
          <div key={veteran._id} className="veteran-row">
            <div>{veteran.lastName}, {veteran.firstName}</div>
            <div>{veteran.studentID}</div>
            <div>{veteran.benefit}</div>
            <div>{veteran.requiredDocs.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
