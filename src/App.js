// import logo from "./logo.svg";
import "./App.css";
import Rows from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //by default isLargeRow is true or we can assign it to ={true}
      />
      <Rows title="Treding Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
