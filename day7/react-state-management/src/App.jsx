import './App.css'
import Counter from './components/Counter'
import TextPreview from './components/TextPreview'

function App() {
  return (
    <div className="app-container">
      <h1>React State Management Demo</h1>
      <div className="components-container">
        <Counter />
        <TextPreview />
      </div>
    </div>
  )
}

export default App
