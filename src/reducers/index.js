const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(state[action.item.id]);
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? state[action.item.id].quantity + 1
            : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      if (state[action.item.id] && state[action.item.id].quantity === 1) {
        const copyOfState = { ...state };
        delete copyOfState[action.item.id];

        return copyOfState;
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: state[action.item.id].quantity - 1,
          },
        };
      }
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
