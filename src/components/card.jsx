
import starImg from '../assets/images/star.png';

export default function Card(props){
    return(
        
        <div className="card">
        {console.log(starImg)}
            {props.item.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={"/src/assets/images/"+props.item.coverImg} className="card--image" />
            <div className='card--stats'>
                <img src={starImg} className='card--star' />
                <span>{props.item.rating}</span>
                <span className='gray'> ({props.item.reviewCount}) .</span>
                <span className='gray'>{props.item.country}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p className='card--price'><span className='bold'>From {props.item.price} $</span>/ person</p>
        </div>
    )
}