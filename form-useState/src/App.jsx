import './App.css'
import { useState } from 'react'


function App() {
  const [formData, SetFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: ''
  })

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    SetFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })


  }
  return (
    <div className='form-container'>
      <h1>Form Example</h1>

      <div>
        <form action="">
          {/* text input */}
          <div className='form-field'>
            <label htmlFor="">Text:</label>
            <input
              type="text"
              name='text'
              value={formData.text}
              onChange={handleChange}>
            </input>
          </div>
          {/* checkbox */}

          <div className='form-field'>
            <label htmlFor="">
              <input
                type="checkbox"
                name="checkbox"
                onChange={handleChange}
              ></input>
              Checkbox
            </label>
          </div>

          {/* radio button */}

          <div className='form-field'>
            <label htmlFor="">Radio:</label>
            <label htmlFor="">
              <input
                type="radio"
                name="radio"
                value='option1'
                checked={formData.radio === 'option1'}
                onChange={handleChange}
              ></input>
              Option 1
            </label>

            <label htmlFor="">
              <input
                type="radio"
                name="radio"
                value='option2'
                checked={formData.radio === 'option2'}
                onChange={handleChange}
              ></input>
              Option 2
            </label>

          </div>


          <div className='form-field'>
            <label htmlFor="">Select:</label>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className='form-data'>
            <h3>Form Data</h3>
            <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
            <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
            <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
            <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App
