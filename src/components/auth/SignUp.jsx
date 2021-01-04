import React, { Component } from "react";
import { connect } from 'react-redux';
import { signUpUser } from "../../actions/authActions";
import { Redirect } from 'react-router-dom';


class SignUp extends Component {
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
      this.props.signUpUser(this.state)
  }
  render() {
      const { uid } = this.props;
      if (uid) return <Redirect to='/' />
    return (
      <>
        <form className='container' autoComplete='off' style={{marginTop: '30px'}} onSubmit={this.handleSubmit}>
            <legend>
                <h4>Sign Up</h4>
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

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (creds) => dispatch(signUpUser(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
