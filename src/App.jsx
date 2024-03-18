import { useState } from 'react'
import image from './assets/react.svg'
import './App.css'

// const author = "Jordan Moore";
// const title = "Best JavaScript Book";
// const img = "image"

const firstBook = {
  author: "Jordan Moore",
  title: "Best JavaScript Book",
  img: image
}
const secondBook = {
  author: "Hasibul Islam",
  title: "Life is a game",
  img: "https://m.media-amazon.com/images/I/71FsIkGF3pL._SL1500_.jpg"
}


function App() {

  return (
    <section>
      <Books author={firstBook.author} title={firstBook.title} image={firstBook.img} ></Books>
      {/* <Books author={secondBook.author} title={secondBook.title} image={secondBook.img}></Books> */}
    </section>

  //   <section>
  //     <Book job="Developer"></Book>
      
  //     <Book title = "Random Title" number = {22}></Book>
    //  </section>
  )
}

const Books = (props) => {
  console.log(props);
  return (
    <article>
      <h2>Welcome to My book selection</h2>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.job}</p>
    </article>
  )
}







// const Book = (props) => {
//   console.log(props);
//   return (
//     <article>
//       <h1>My Favorite book list </h1>
//       <img src={image} alt="" />
//       <h2>{props.title}</h2>
//       <h3>{author}</h3>
//       <p>{props.job}</p>
//     </article>
//   )
// }
export default App
