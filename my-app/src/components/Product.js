import '../styles/utils.css'
import '../styles/products.css'

export default function Product(props){
   let badgeText
   if (props.openSpots === 0){
      badgeText = "SOLD-OUT"
   }
 return (
  <div className='card-product flex-c flex-start'>
      {props.openSpots === 0 && <div className='card-product--badge'>{badgeText}</div>}
     <div className='products--image-container'>
      <img src={props.img} alt={props.imageAlt} />
     </div>
     <div className='flex-r'>
     <i className="fa-solid fa-star"></i>
     <p>{props.startValue}</p><span> {props.peopleVote}</span>
     </div>
     <div className='product-information'>
      <p>{props.info}</p>
     </div>
     <div className='product-price'>
     <p><span className='price'>Just{props.price}</span>/package</p>
     </div>
  </div>
 )
}