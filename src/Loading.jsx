import { Component } from 'react';

class Loading extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <>
        <p style={{ color: 'grey' }}>Cargando...</p>
      </>
    );
  }
}

export { Loading };
