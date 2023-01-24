import { useEffect, useState } from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  // Evento actualizador del estado
  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false,
      value: '',
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

  const handleChangeValue = (_) => {
    setState({
      ...state,
      value: _.target.value,
    });
  };
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
          onChange={handleChangeValue}
        />
        {/* <button onClick={() => setError((prevState) => !prevStatz)}> */}
        <button onClick={() => setState({ ...state, loading: true })}>
          Comprobar
        </button>
      </>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <h2>Eliminar</h2>
        <p>Esta segur@???</p>
        <div>
          <button
            onClick={() => {
              onDelete();
            }}
          >
            Si
          </button>
          <button
            onClick={() => {
              onReset();
            }}
          >
            NO
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Se elimino</h2>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Restaurar{' '}
        </button>
      </>
    );
  }
};

export { UseState };
