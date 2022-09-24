import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const itemIndex = state.items.findIndex(item => item.id === action.item);
    let updatedItems;
    let updatedTotalAmount;
    if(itemIndex) {
        const newItems = [...state.items];
        newItems[itemIndex].amount += action.item.amount;
        updatedItems = newItems;

    } else {
        updatedItems = [...state.items, action.item];
    }
    updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
    
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'ADD', id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,

    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
