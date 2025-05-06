import './App.css'

const text = "¡double mark!"

function App() {
  return (
    <div className="card">
      <h1>
        {text.split("").map((letter, index) => (
          <span key={index} className="letter" style={{animationDelay: `${index * 0.1}s`}}>
            {letter}
          </span>
        ))}
      </h1>

      <h2 className='letter letter--small' style={{animationDelay: `${(text.length + 1) * 0.1}s`}}>¡Coming Soon!</h2>
    </div>
  )
}

export default App
