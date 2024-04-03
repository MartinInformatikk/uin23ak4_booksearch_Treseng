import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'

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
    <Layout>
      <Routes>
        <Route index element={<Homepage content={content}/>} />
      </Routes>
    </Layout>
  )
}


export default App
