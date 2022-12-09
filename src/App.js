import './App.css'
import InfoCard from './components/InfoCard'

function App() {
  return (
    <div className="App">
      <InfoCard
        lastName={ "Diez" }
        firstName={ "Pablo" }
        hairColor={ "Dark brown" }
        // age is being passed in as default value for state
        age={ 32 }
      />
    </div>
  )
}

export default App