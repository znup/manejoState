import { Component } from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  componentDidUpdate() {
    console.log('Actualizacion');
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validacion');

        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log('Terminando la validacion');
      }, 2000);
    }
  }

  render() {
    return (
      <>
        <h3>Eliminar {this.props.name}</h3>
        <p>Escribe el código de seguridad</p>

        {this.state.error && !this.state.loading && (
          <p style={{ color: 'red' }}>Error: el código es incorrecto</p>
        )}

        {this.state.loading && <Loading />}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(_) => {
            this.setState({ value: _.target.value });
          }}
        />
        {/* <button onClick={() => this.setState({ error: !this.state.error })}> */}
        {/* <button
          onClick={() =>
            this.setState((prevState) => ({
              error: !prevState.error,
            }))
          }
        > */}
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </>
    );
  }
}

export { ClassState };
