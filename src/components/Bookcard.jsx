import { Link } from "react-router-dom";

export default function Bookcard({title, year, authors, rating, amazonid }){
    
    return(
        
          <article>
            <h3>{title}</h3>
            <p>{year}</p>
            {authors?.map(author =>
              <p key={author}>{author}</p>)}
            <p>rating: {rating}</p>
            <a href={amazonid}>Amazon</a>
          </article>
    )
}