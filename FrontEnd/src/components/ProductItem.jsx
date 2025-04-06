import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
 
const {currency} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row border-gray-400'>

      <Link className='text-gray cursor-pointer' to={`/product/${id}`}> 

      <div className='overflow-hidden'>
          <img src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-3 text-small'>{name}</p>
      <p className='pt-3 pb-3 text-small'>{currency}{price}</p>


      </Link>
    </div>
  );
};

export default ProductItem;
