import { Routes, Route } from "react-router-dom"
import Calendar from "./Calendar"
import Entry from "./Entry"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Calendar/> } />
        <Route path="entry" element={ <Entry/> } />
      </Routes>
    </div>
  )
}

export default App