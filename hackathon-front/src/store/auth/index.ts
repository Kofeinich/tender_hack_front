import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {RegistrationFormValues, JwtType, AxiosResponse, LoginFormInitialValues} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as authApi from '../../api/auth';
import { useHistory } from "react-router-dom";
import { errorToast } from "../../components/alerts/fail";

class AuthStore {
  user = {
    authToken: '',
    accessToken: '',
  };
  isLoading = false;
  isAuthorized = false;
  responseStatus: AxiosResponse = {
    code: undefined,
    message: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setTokenToLocalStorage = (userInfo: any) => {
    localStorage.setItem("accessToken", userInfo.accessToken);
    localStorage.setItem("authToken", userInfo.authToken);
    this.isAuthorized = true;
  }

  @action
  saveUser(user: RegistrationFormValues) {
    return authApi.saveUserApi(user).then(res => {
      if(res?.status === 200) {
        this.responseStatus = {
          code: res.status,
          message: 'Successfully added'
        }
        return res;
      } else {
        this.responseStatus = {
          code: res?.status,
          message: res?.data
        }
      }
    });
  }

  @action
  deleteTokenFromLocalStorage = () => {
    localStorage.clear();
    this.isAuthorized = false;
  }

  @action
  setUser = (jwtData: JwtType) => {
    console.log(jwtData, 'user');
    this.isLoading = true;
    this.user = {...jwtData};
  }

  @action
  getUser = () => {
    return this.user;
  }

  @action
  setIsAuthorized = (bool: boolean) => {
    this.isAuthorized = bool;
  }
}

export default new AuthStore();
