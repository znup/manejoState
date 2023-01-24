// Debemos tener estados compuestos
const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// Base
// const reducer = (state, action) => {
// }

// Con IF
const reducer = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'RESET') {
    return {
      ...state,
      deleted: false,
      confirmed: false,
      value: '',
    };
  } else {
    return {
      ...state,
    };
  }
};

// Con Switch
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR ':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'RESET':
      return {
        ...state,
        deleted: false,
        confirmed: false,
        value: '',
      };
    default:
      return {
        ...state,
      };
  }
};


//Object
const reducerObject = (state, action) => ({
  'ERROR ': {
        ...state,
        error: true,
        loading: false,
      },
  'RESET': {
        ...state,
        deleted: false,
        confirmed: false,
        value: '',
      },  
    default: {
        ...state,
      };
})

const reducer2 = (state, action) => {
  
}