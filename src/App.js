import style from './App.module.css';
import logo from './youtube-logo.png'
import Child from './Components/Child/Child';
import { useState } from 'react';
import axios from 'axios';

let initialData = [
  {
    snippet: {
      description: "Dil Ki Tanhai Ko | Kumar Sanu | Chaahat | Shah Rukh Khan, Ramya Krishnan, Pooja Bhatt",
      channelTitle: "Red Chillies Entertainment"
    },
    id: { videoId: "8mweiZlvxsE" }

  },
  {
    snippet: {
      description: "Maine payal hai chhankai | Nivi and Ishanvi | Mom daughter dance | Laasya dance choreography",
      channelTitle: "Laasya"
    },
    id: { videolId: "sg0cVs1I_no" }
  },
  {
    snippet: {
      description: "Sajan Tumse Pyar Ki Ladai Mein | Sudhakar Sharma Song | Sonu Nigam, Alka Yagnik | Himesh Reshammiya",
      channelTitle: "Lyricist Sudhakar Sharma"
    },
    id: { videoId: "j6X7PwSEGsQ" }
  },
  {
    snippet: {
      description: "#Video | #Pawan Singh New Song | लाल घाघरा | Lal Ghaghra | Shilpi Raj | Namrita Malla| Bhojpuri Gana",
      channelTitle: "Saregama Hum Bhojpuri"
    },
    id: { videoId: "qZId59qml_4" }
  },
  {
    snippet: {
      description: "Tera pyar hai meri zindagi Nusrat Fateh Ali khan best Qawali | Mere baad kis ko sataogy",
      channelTitle: "All In One"
    },
    id: { videoId: "BNy2PJNJG1o" }
  }
];

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
      <div className={style.header}>
        <div className={style.header1}>
          <i className="fa-solid fa-bars"></i>
          <img src={logo} alt="" />
        </div>
        <div className={style.header2}>
          <input type="text" placeholder="Search" id="search" autocomplete="off" onInput={myQuery} />
          <i class={`fa-solid fa-magnifying-glass ${style.searchIcon}`} onClick={searchVideo}></i>
          <i className={`fa-solid fa-microphone ${style.mic}`}></i>
        </div>
        <div className={style.header3}>
          <i class="fa-solid fa-video"></i>
          <i class="fa-regular fa-bell"></i>
          <i class="fa-solid fa-circle-user"></i>
        </div>
      </div>

      <hr />

      <div className={style.sugestion}>
        <div onClick={instantSearch}>New Song</div>
        <div onClick={instantSearch}>Javascript</div>
        <div onClick={instantSearch}>Website</div>
        <div onClick={instantSearch}>Comedy</div>
        <div onClick={instantSearch}>Programming</div>
        <div onClick={instantSearch}>Mixes</div>
        <div onClick={instantSearch}>Courses</div>
        <div onClick={instantSearch}>Thrillers</div>
        <div onClick={instantSearch}>T-series</div>
        <div onClick={instantSearch}>Music</div>
        <div onClick={instantSearch}>Cricket</div>
        <div onClick={instantSearch}>News</div>
      </div>

      <div className={style.container}>
        {displayData.map((data) => {
          return <Child videoId={data.id.videoId} channelTitle={data.snippet.channelTitle} description={data.snippet.description} />
        })}
      </div>
    </div>
  );
}

export default App;
