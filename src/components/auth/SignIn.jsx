import React, { Component } from "react";

export default class SignIn extends Component {
  state = {
      email: '',
      password: '',
  };

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
  }
  render() {
    return (
      <>
        <form className='container' autoComplete='off' style={{marginTop: '30px'}} onSubmit={this.handleSubmit}>
            <legend>
                <h4>Sign In</h4>
            </legend>
          <div className="mb-3">
            <label htmlFor="email">Enter Email</label>
            <input type="email" className="form-control" id="email" onChange={this.handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Enter Password</label>
            <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </>
    );
  }
}
