import { useState } from "react";
import Bookcard from "./Bookcard";

export default function Searchresults({content, setQuery}){
    const [bookQuery, setBookQuery] = useState("")
    const searchHandle = (e)=>{
        setBookQuery(e.target.value)
        console.log(e.target.value)
        if(e.target.value.length > 3){
            e.preventDefault()
            setQuery(bookQuery)
        }
    }
    return(
        <>
        <h2>Search: </h2>
        <form>
            <label htmlFor="booksearch">Book Title: </label>
            <input type="text" id="booksearch" onChange={searchHandle}></input>
        </form>
        <section>
            {content?.map(book => <Bookcard key={book.key} title={book.title} year = {book.first_publish_year} authors = {book.author_name} rating = {book.ratings_average} amazonid = {book.id_amazon} />)}
        </section>
        </>
    )
}