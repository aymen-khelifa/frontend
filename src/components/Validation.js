const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email not valid')
      : setEmailError('');
  };
const validateName = ({ name, setNameError }) => {
    return name && name.length < 5
      ? setNameError(' name is too short')
      : name && name.length > 50
      ? setNameError('Try to make short and meanfull')
      : setNameError('');
  };
const validatePassword = ({ password, setPasswordError }) => {
    return password && password.length < 8
      ? setPasswordError('password is too short')
      : password && password.length > 200
      ? setPasswordError('Try to make short and meanfull')
      : setPasswordError('');
  };

  export { validateEmail, validateName, validatePassword };
