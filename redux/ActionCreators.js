export const onSignUpSubmit = (userData, navigate) => {    
  return (dispatch) => {
    if(!userData.userName){
      dispatch({
        type: 'SIGNUP_SUBMIT_FAILED',
        message: 'User Name is Required'
      })
      return Promise.resolve()
    }
    const options = {    
      method: 'POST', 
      mode: 'cors',    
      headers: {
        'Content-Type': 'application/json'        
      },      
      body: JSON.stringify(userData) 
    }

    return fetch('http://localhost:5000/users', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('Home')
        dispatch({
          type: 'foo'
        })
      })
      .catch((err) => {
        console.log(err)
      })           
  }    
}

export const onSignInSubmit = (userData, navigate) => {    
  return (dispatch) => {
    if(!userData.email){
      dispatch({
        type: 'SIGNIN_SUBMIT_FAILED',
        message: 'Email is Required'
      })
      return Promise.resolve()
    }
    const options = {    
      method: 'POST', 
      mode: 'cors',    
      headers: {
        'Content-Type': 'application/json'        
      },      
      body: JSON.stringify(userData) 
    }

    return fetch('http://localhost:5000/users', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('Home')
        dispatch({
          type: 'foo'
        })
      })
      .catch((err) => {
        console.log(err)
      })           
  }    
}

export const onSelectCategory = (catInfo, navigate) => {    
  return (dispatch) => {
    if(!catInfo.catName){
      dispatch({
        type: 'CATEGORY_SELECT_FAILED',
        message: 'Category is Required'
      })
      return Promise.resolve()
    }
    const options = {    
      method: 'POST', 
      mode: 'cors',    
      headers: {
        'Content-Type': 'application/json'        
      },      
      body: JSON.stringify(catInfo) 
    }

    return fetch('http://localhost:3000/categories', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('Home')
        dispatch({
          type: 'foo'
        })
      })
      .catch((err) => {
        console.log(err)
      })           
  }    
}

        // dispatch({
        //   type: 'SIGNUP_SUBMIT_SUCCESS', 
        //   payload: {data, message:'success'}
        // })
      // .catch((err) => {
      //   console.log(err)
      //   dispatch({
      //     type: 'SIGNUP_SUBMIT_FAILED', message: 'danger'
      //   })
      // 
 