import '../styles/utils.css'
import '../styles/showimage.css'

const images = {
 image1: require('../assets/image1.jpg'),
 image2: require('../assets/image2.jpg'),
 image3: require('../assets/image3.jpg'),
 image4: require('../assets/image4.jpg'),
 image5: require('../assets/image5.jpg'),
 image6: require('../assets/image6.jpg'),
 image7: require('../assets/image7.jpg'),
 image8: require('../assets/image8.jpg'),
 image9: require('../assets/image9.jpg'),
}

export default function ShowImage(){
 return (
  <div className='image-container flex-r flex-center'>
   <div className='flex-r flex-join'>
    <img src={images.image1} alt="" />
   </div>
   <div className='flex-c flex-self-start'>
   <img src={images.image2} alt="" />
   <img src={images.image3} alt="" />
   </div>
   <div className='flex-c flex-self-end'>
   <img src={images.image4} alt="" />
   <img src={images.image5} alt="" />
   </div>
   <div className='flex-c flex-self-start'>
   <img src={images.image6} alt="" />
   <img src={images.image7} alt="" />
   </div>
   <div className='flex-c flex-join'>
   <img src={images.image8} alt="" />
   <img src={images.image9} alt="" />
   </div>
  </div>
 )
}