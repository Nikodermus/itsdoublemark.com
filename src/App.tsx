import './App.css'

const text = "¡coming soon!"

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
    </div>
  )
}

export default App
