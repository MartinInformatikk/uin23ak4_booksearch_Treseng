import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'
import BookSearch from './components/BookSearch'
import Searchresults from './components/Searchresults'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("james+bond")

  const getData = async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
      console.log(data.docs)
    }catch{
      console.error("Error")
    }
  }

  useEffect(()=>{
    getData()
  },[query])


  return(
    <Layout>
      <Routes>
        <Route index element={<Homepage content={content}/>} />
        <Route path="booksearch/*" element={<BookSearch />}>
          <Route index element={<Searchresults content={content} setQuery={setQuery} />}/>
        </Route>
      </Routes>
    </Layout>
  )
}


export default App
