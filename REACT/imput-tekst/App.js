class App extends React.Component {
  state = {
    value: ""
  }

  handleChange(e){
    console.log(e.target.value);
    
  }

  render() {
    return (
     <React.Fragment>
       <input onChange={this.handleChange} type="text" />
      <button>Reset</button>
      <h1 className="title"></h1>
     </React.Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))