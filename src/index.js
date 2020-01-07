import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage'

class App extends React.Component {
  state = { lat: null, errorMessage: null }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( {lat: position.coords.latitude} ),
      err => this.setState({errorMessage: err.message}),
    );
  }
  
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <ErrorMessage error={this.state.errorMessage} />;
    }
    return <Spinner message="Please accept location request"/>;
  }

  render() { 
    return (
      <div className="container">{this.renderContent()}</div>
    )
  }
}
 
ReactDOM.render(<App/>, document.querySelector('#root'));