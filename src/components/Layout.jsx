import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({children}){

    return(
        <>
    <header>
      <h1>Book Library</h1>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="booksearch">Search</a></li>
        </ul>
      </nav>
    </header>
    <main>
          {children}
    </main>
    <footer>footer</footer>
    
    </>
    )
}