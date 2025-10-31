import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white")

  // const colors = ["#ff0000"]
  const colors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500"  // Orange
  ];

  const handleColor = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div className='app' style={{ backgroundColor: backgroundColor }}>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {
          colors.map((color, index) => (
            <div
              key={index}
              className='color-box'
              style={{ backgroundColor: color }}
              onClick={() => { handleColor(color) }}>

            </div>
          ))
        }

      </div>
      <div className="custom-color-picer">
        <input type="color"
          value={backgroundColor}
          onChange={(e) => handleColor(e.target.value)}
        />
      </div>
    </div>
  )
}

export default App
