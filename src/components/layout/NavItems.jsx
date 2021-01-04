import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

function NavItems({ signOut, uid }) {
  if (uid) {
    return (
      <Link to="/signin" className="navbar-link" onClick={signOut}>
        Sign Out
      </Link>
    );
  } else {
    return (
      <>
        <div>
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
          <Link to="/signin" className="navbar-link">
            Sign In
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
