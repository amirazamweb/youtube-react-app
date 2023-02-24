import style from './Header2.module.css'

const Header2 = ({ myQuery, searchVideo }) => {
    return (
        <div className={style.header2}>
            <input type="text" placeholder="Search" id="search" autoComplete="off" onInput={myQuery} />
            <i className={`fa-solid fa-magnifying-glass ${style.searchIcon}`} onClick={searchVideo}></i>
            <i className={`fa-solid fa-microphone ${style.mic}`}></i>
        </div>
    )
}

export default Header2;