import React from 'react';
// import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/constants";
// replacing with reduct 
import { idbPromise } from "../../utils/helpers";
import { useDispatch } from "react-redux";


const CartItem = ({ item }) => {

  // const [, dispatch] = useStoreContext();
  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    // idbPromise('cart', 'delete', { ...item });

  };

  // manually edit the quantity of shopping cart items by typing directly in the <input> elements
  const onChange = (e) => {
    const value = e.target.value; 
    //if the user changes the quantity to zero, we should simply delete the item from the cart
    if (value === '0') {
      dispatch ({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
      // or just update the quanity 
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
    
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };


  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;