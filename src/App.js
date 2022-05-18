import { Header } from "./components/headers"
import { LogForm } from "./components/form";
import { useEffect, useState } from 'react';
import { fetchImages } from "./utils";
import './App.css';


const App = () => {
  const [title, setTitle] = useState();
  const [userInput, setUserInput] = useState();
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(userInput);
  };
    return (
    <div className="App">
     <Header title={title}/>
     <LogForm setUser={setUser} />
     <form onSubmit={submitHandler}>
      <input onChange={(event) => setUserInput(event.target.value)} />
     </form>
     {title ? <h2>You wrote a title</h2> : <h2>Hurry up and write a title</h2>}
     {title && <h2>Hooray</h2>}
     {images.map((image, i) => {
       return(
         <img src={image.download_url} alt={`random file from unsplash number ${i}`}/>
       )
     })}
     {/* <img src="https://picsum.photos/200" alt="Lorem Picsum randomly grabbed"/> */}
    </div>
  );
}

export default App;
