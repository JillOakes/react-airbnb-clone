import star from '../images/star.svg';

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='cardBadge'>{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} alt="activity" className='cardPhoto'/>
            <div className="cardStats">
                <img src={star} alt="star" className='cardStar'/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='cardTitle'>{props.item.title}</p>
            <p className='cardPrice'><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}