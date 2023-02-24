import style from './InstantSearch.module.css'

const InstantSearch = ({ instantSearch }) => {
    return (
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
    )
}

export default InstantSearch;