import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const Hero = () => {
    
    const {products} = useContext(ShopContext);
    const [bestSeller, SetBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = product.filter((items) => {
            item.bestSeller;
        })
        SetBestSeller(bestSeller.slice(0,5));
        console.log(products);
        console.log(bestProduct);
    })

  return (
    <div className='flex flex-col sm:flex-row border-gray-400'>
         <div className='Text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className=''></p>
         </div>
      
    </div>
  );
};

export default Hero;
