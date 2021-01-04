export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase();
    firestore
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({type: "SIGN_IN"});
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_ERR",
          err,
        });
      });
  };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase();
      firestore
        .auth()
        .signOut()
        .then(() => {
          dispatch({type: "SIGN_OUT"});
        })
        .catch((err) => {
          dispatch({
            type: "SIGN_OUT_ERR",
            err,
          });
        });
    };
  };
  
  export const signUpUser = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase();
      firestore
        .auth()
        .createUserWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
          dispatch({type: "SIGN_UP"});
        })
        .catch((err) => {
          dispatch({
            type: "SIGN_UP_ERR",
            err,
          });
        });
    };
  };