import photo from '../images/zaferes.PNG';
import star from '../images/star.svg';

export default function Card() {
    return (
        <div className="card">
            <img src={photo} alt="Kate Zaferes" className='cardPhoto'/>
            <div className="cardStats">
                <img src={star} alt="star"className='cardStar'/>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}