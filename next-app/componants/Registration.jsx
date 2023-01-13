import React, { useState } from 'react';
import styles from '../styles/Registration.module.css'

const Registration = () => {
      const [formData, setFormData] = useState({
            name: '',
            id: '',
            department: '',
            batch: '',
            birthday: ''
          });
        
          const handleChange = event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            });
          };
        
          const handleSubmit = event => {
            event.preventDefault();
            // Your submit logic here
          };
        
          return (
            <div className={styles.registrationformcontainer}>
              <form className={styles.registrationform} onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </label>
                <label>
                  E-MAIL:
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail Address"
                    required
                  />
                </label>
                <label>
                  ID:
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="Student ID"
                    required
                  />
                </label>
                <label>
                  Department:
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Your Department"
                    required
                  />
                </label>
                <label>
                  Batch:
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    placeholder="Your Batch"
                    required
                  />
                </label>
                <label>
                  Birthday:
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    placeholder="Your Date Of Birth"
                    required
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
      )
}

export default Registration