import Bookcard from "./Bookcard";

export default function Homepage({content}){

 
    return (
    <section>
       {content?.map(book => <Bookcard key={book.key} title={book.title} year = {book.first_publish_year} authors = {book.author_name} rating = {book.ratings_average} amazonid = {book.id_amazon} />)}
    </section>
)
}