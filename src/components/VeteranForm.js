import { useState } from 'react';
import axios from 'axios';

const VeteranForm = ({ setVeterans }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentID: '',
    benefit: '',
  });

  const benefits = [
    'GI Bill', 'Chapter 30', 'Chapter 31', 'Chapter 33 Post 911', 'Chapter 35',
    'Fed TA', 'State TA', 'Missouri Returning Heros'
  ];

  const requiredDocsMapping = {
    'GI Bill': ['COE', 'Enrollment Manager', 'Schedule'],
    'Chapter 30': ['COE', 'Enrollment Manager', 'Schedule'],
    'Chapter 31': ['Enrollment Manager', 'Schedule'],
    'Chapter 33 Post 911': ['COE', 'Enrollment Manager', 'Schedule'],
    'Chapter 35': ['COE', 'Enrollment Manager', 'Schedule'],
    'Fed TA': ['TAR', 'Enrollment Manager', 'Schedule'],
    'State TA': ['Award Letter', 'Enrollment Manager', 'Schedule'],
    'Missouri Returning Heros': ['DD214', 'Enrollment Manager', 'Schedule']
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const requiredDocs = requiredDocsMapping[formData.benefit] || [];

    const veteranData = { ...formData, requiredDocs };
    
    axios.post('http://localhost:5000/veterans', veteranData)
      .then(response => {
        setVeterans(prev => [...prev, response.data]);
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="studentID"
        value={formData.studentID}
        placeholder="Student ID"
        onChange={handleChange}
        required
      />
      <select
        name="benefit"
        value={formData.benefit}
        onChange={handleChange}
        required
      >
        <option value="">Select Benefit</option>
        {benefits.map(benefit => (
          <option key={benefit} value={benefit}>{benefit}</option>
        ))}
      </select>
      <button type="submit">Create Veteran</button>
    </form>
  );
};

export default VeteranForm;