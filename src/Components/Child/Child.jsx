
import style from './Child.module.css';
const Child = (props) => {
    return (
        <div className={style.unit}>
            <iframe src={`https://www.youtube.com/embed/${props.videoId}`} title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <p className={style.title}>{props.description}</p>
            <p className={style.channelTitle}>{props.channelTitle}</p>
        </div>
    )
}

export default Child;