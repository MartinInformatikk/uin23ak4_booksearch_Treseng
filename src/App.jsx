import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james+bond")
  const [currentId, setCurrentId] = useState("")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=james+bond`)
      const data = await response.json()
      setContent(data.docs)
      console.log(data.docs)
    }catch{
      console.error("Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return(
  <>
  <header>
    <h1>Book Library</h1>
    <nav>
      <ul>
      <li><a href="#">Home</a></li>
        <li><a href="#">Search</a></li>
      </ul>

      <main>
        <section>
          {content?.map(book =>
          <article key={book.key}>
            <h3>{book.title}</h3>
            <p>{book.first_publish_year}</p>
            {book.author_name?.map(author =>
              <p key={author+book.key}>{author}</p>)}
            <p>rating: {book.ratings_average}</p>
            <a href={book.id_amazon}>Amazon</a>
          </article> )}
        </section>


      </main>
      <footer>footer</footer>
    </nav>
  </header>
  
  </>
  )
}


export default App
