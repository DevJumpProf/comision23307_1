import ShowPosts from "./components/ShowPosts"
import EditPost from "./components/EditPost"
import CreatePost from "./components/CreatePost"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <header className="App-header"></header>
  <BrowserRouter>
  <Routes>
<Route path="/" element={<ShowPosts/>}/>
<Route path="/create" element={<CreatePost/>}/>
<Route path="/edit/:id" element={<EditPost/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
