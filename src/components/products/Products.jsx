import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_products.scss';

import { getProducts } from '../../Redux/Product/productAction';

const Products = () => {
  const productData = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log('product', productData);
  return (
    <div className='product-container'>
      {productData.map((product, key) => {
        return (
          <div className='mx-3 p-3 product-card'>
            <div className='product-image-container'>
              <img src={`/images/shop/${product.product_img}`} alt='Product' />
            </div>
            <div className='product-info'>
              <h5>
                <a href='#'>{product.product_name}</a>
              </h5>
              <p className='product-price'>${product.price}</p>
              <div className='product-rating'>
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star' />
                <i className='fa fa-star' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
