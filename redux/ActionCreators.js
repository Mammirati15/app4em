export const onSignUpSubmit = (firstName, lastName, email, password, passwordConf) => {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_SUBMIT_FAILED', message: 'danger'
    })
  }
}