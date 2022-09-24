import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    console.log(action);
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const cartItem = state.items[itemIndex];
    let updatedItems;
    let updatedTotalAmount;
    if (cartItem) {
      const updatedItem = {
        ...cartItem,
        amount: action.amount ? cartItem.amount + action.amount : cartItem.amount + action.item.amount,
      };
      const newItems = [...state.items];
      newItems[itemIndex] = updatedItem;
      updatedItems = newItems;
    } else {
      updatedItems = [...state.items, action.item];
    }
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const cartItem = state.items[itemIndex];
    let updatedItems;
    let updatedTotalAmount;
    if (cartItem) {
      if (cartItem.amount === 1) {
        updatedItems = [...state.items].splice(itemIndex + 1, 1);
      } else {
        const updatedItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }
      updatedTotalAmount = state.totalAmount - cartItem.price;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item, amount) => {
    dispatchCartAction({ type: 'ADD', item: item, amount: amount });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
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
