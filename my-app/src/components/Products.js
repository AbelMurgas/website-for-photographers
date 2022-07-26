import '../styles/utils.css'
import '../styles/products.css'
import Product from './Product'
import ProductsData from './ProductsData'


export default function Products(){
 const productsElement = ProductsData.map(data =>{
  return <Product key={data.id}
    {...data}
  />
 })
   
 return (
  <section className='products container'>
   <div className='flex-r flex-center'>
    {productsElement}
   </div>
  </section>
 )
}
