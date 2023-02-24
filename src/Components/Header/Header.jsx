
import style from './Header.module.css';
import Header1 from "./Header1/Header1";
import Header2 from "./Header2/Header2";
import Header3 from "./Header3/Header3";

const Header = ({ myQuery, searchVideo }) => {
    return (
        <div className={style.header}>
            <Header1 />
            <Header2 myQuery={myQuery} searchVideo={searchVideo} />
            <Header3 />
        </div>
    )
}

export default Header;