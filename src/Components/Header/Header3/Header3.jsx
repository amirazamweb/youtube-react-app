import style from './Header3.module.css'

const Header3 = () => {
    return (
        <div className={style.header3}>
            <i className="fa-solid fa-video"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-solid fa-circle-user"></i>
        </div>
    )
}

export default Header3;