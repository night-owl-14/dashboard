import validator from 'validator';
import {post} from '../../utils/http';
import {DefaultAccount} from "../../constants";
import {AuthenticationAPI} from "../../constants/services";

export const validate = (account) => {
  let isValid = false, message = '';
  const {email, password} = account;
  if (email === '' || password === '') {
    message = 'email or password cannot be empty';
  } else if (!validator.isEmail(email)) {
    message = 'please enter a valid email address';
  } else {
    isValid = true;
  }
  return {isValid: isValid, message: message};
};

export const getUserAuth = (payload) => {
  const auth = post(AuthenticationAPI.LOGGED_IN, payload);
  if (auth.success) {
    return auth.data;
  }
  return DefaultAccount; // TODO: remove this when api is ready
};
