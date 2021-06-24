import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
//import the necessary action and context Hook functionality 
import { useStoreContext } from '../../utils/GlobalState'; 
import { UPDATE_PRODUCTS } from '../../utils/actions'; 
import { idbPromise } from "../../utils/helpers"

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS); 
  
  useEffect(() => {
    // if there's data to be stored 
    if (data) {
      // let's store it in the global state object 
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
      // let's also take each product and save it to the IndexedDB useing the helper function 
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
      // add else if to check if 'loading' is undefined in the 'userQuery()' hook 
    } else if (!loading) {
      // since we're offline, get all of the data from the 'products' store 
      idbPromise('prodcuts', 'get').then((products) => {
        // use retrieve data to sset global sate for the offline browsing 
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
     }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
  }

  
  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
