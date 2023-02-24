import logo from '../../../youtube-logo.png'
import style from './Header1.module.css'

const Header1 = () => {
    return (
        <div className={style.header1}>
            <i className={`fa-solid fa-bars ${style.sideIcon}`}></i>
            <img src={logo} alt="Youtube" />
        </div>
    )
}

export default Header1;