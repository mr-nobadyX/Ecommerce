import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Product from '../pages/Product';
import ProductItem from './ProductItem';

const LatestCollections = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(Product.slice(0, 20));
    }, []);


    return (
        <div className='my-10'>
            <div className='text-center py-10 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'}/>
                <p className='w-3/4 m-auto text-xs sm: other all'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in optio culpa molestias sunt doloribus! 
                Necessitatibus eum ullam impedit vero omnis voluptate vitae, repudiandae delectus inventore, cupiditate incidunt? 
                Quia, inventore!
                </p>
            </div>

        
        {/* Rendering products */}
        <div>
            {
               latestProducts.map((item, index)=>{
                <ProductItem key={index} id={item.id} image={item.image} name={item.name}/>
               })
            }
        </div>
            
        </div>
    )
};

export default LatestCollections;
