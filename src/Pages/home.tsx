import {Link} from 'react-router-dom'
import ProductCard from '../Components/product-card';

const Home = () => {

  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>Latest Products 
        <Link to="/search" className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard 
        productId="sjkhjhsj" 
        name="Macbook" 
        price={45645}
        stock={34}
        handler={addToCartHandler}
        photo=""/>
        
      </main>
      
    </div>
  )
}

export default Home

