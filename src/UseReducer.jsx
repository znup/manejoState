import { useEffect, useReducer } from 'react';

const SECURITY_CODE = 'paradigma';

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer2, initialState);

  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onConfirm = () => dispatch({ type: actionTypes.confirm });

  const onWrite = ({ target: { value } }) => {
    dispatch({
      type: actionTypes.write,
      payload: value,
    });
  };

  useEffect(() => {
    console.log('Empezando el efecto');

    if (!!state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validacion');

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log('Terminando la validacion');
      }, 2000);
    }

    console.log('Terminando el efecto');
  }, [state.loading]);

  console.log(state.value);
  console.log(state);

  if (!state.deleted && !state.confirmed) {
    return (
      <>
        <h3>Eliminar {name}</h3>

        <p>Escribe el código de seguridad</p>

        {state.error && !state.loading && (
          <p style={{ color: 'red' }}>Error: el código es incorrecto</p>
        )}
        {state.loading && <p style={{ color: 'grey' }}>Cargando...</p>}
        <input
          type="text"
          placeholder="Código de seguridad"
          value={state.value}
          // onChange={handleChangeValue}
          onChange={onWrite}
          // onChange={(e) => {
          //   dispatch({
          //     type: 'WRITE',
          //     payload: e.target.value,
          //   });
          // }}
        />
        {/* <button onClick={() => setState({ ...state, loading: true })}> */}
        <button onClick={onCheck}>Comprobar</button>
      </>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <h2>Eliminar</h2>
        <p>Esta segur@???</p>
        <div>
          <button onClick={onDelete}>Si</button>
          <button onClick={onReset}>NO</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Se elimino</h2>
        <button onClick={onReset}>Restaurar </button>
      </>
    );
  }
};

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  write: 'WRITE',
  check: 'CHECK',
  reset: 'RESET',
  delete: 'DELETE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.reset]: {
    ...state,
    deleted: false,
    confirmed: false,
    value: '',
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
});

// const reducer2 = (state, action) => {
//   if (reducerObject(state)[action.type]) {
//     return reducerObject(state, action.payload)[action.type];
//   } else {
//     return state;
//   }
// };

const reducer2 = (state, { type, payload }) =>
  reducerObject(state, payload)[type] || state;

export { UseReducer };
