import style from './App.module.css';
import Child from './Components/Child/Child';
import { useState } from 'react';
import Header from './Components/Header/Header';
import HR from './Components/HR/HR';
import InstantSearch from './Components/InstantSearch/InstantSearch';
import initialData from './initialData';
import axios from 'axios';

function App() {

  // api call

  async function callApi(q) {
    let api_key = "AIzaSyA_DrGgp4PFLwYzRba_a4g__jlX5NFxNV8";

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${q}&key=${api_key}`;

    let mydata = await axios.get(url);

    let optimisedData = mydata.data.items;

    setDisplayData(optimisedData)
  }

  const [displayData, setDisplayData] = useState(initialData);

  const [query, setQuery] = useState('');

  // query store

  function myQuery(e) {
    setQuery(e.target.value);
  }

  // search button

  function searchVideo() {
    callApi(query)
  }

  // instant search

  function instantSearch(e) {
    callApi(e.target.innerHTML)
  }

  return (
    <div>

      <Header myQuery={myQuery} searchVideo={searchVideo} />

      <HR />

      <InstantSearch instantSearch={instantSearch} />

      <div className={style.container}>

        {displayData.map((data, i) => {
          return <Child key={i} videoId={data.id.videoId} channelTitle={data.snippet.channelTitle} description={data.snippet.description} />
        })}

      </div>

    </div>
  );
}

export default App;
