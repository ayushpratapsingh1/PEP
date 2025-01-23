import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your form has been submitted!');
    window.location.reload();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Personal Survey Form</h2>
        
        <div className="form-group">
          <label>What is your favourite food?</label>
          <input type="text" name="food" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mention any three hobbies:</label>
          <textarea name="hobbies" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>When do you feel happy?</label>
          <input type="text" name="happiness" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>When do you get wild?</label>
          <input type="text" name="wild" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Any one movie you liked the most?</label>
          <input type="text" name="movie" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Help me to provide a best place to visit nearby:</label>
          <input type="text" name="place" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Who is your favourite cricket player?</label>
          <input type="text" name="cricketer" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Who is your guide?</label>
          <input type="text" name="guide" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mention your good father:</label>
          <input type="text" name="father" onChange={handleChange} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
