export const initialState = {
  user: null,
  isLoading: false,
  isHome: false,
  favourites: [],
};

export const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_HOME":
      return {
        ...state,
        isHome: action.payload,
      };
    case "SET_FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };

    default:
      return state;
  }
};
