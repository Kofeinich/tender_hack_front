import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {RegistrationFormValues, JwtType, AxiosResponse, LoginFormInitialValues} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as authApi from '../../api/auth';
import { useHistory } from "react-router-dom";
import { errorToast } from "../../components/alerts/fail";

class SessionsDescriptionStore {
    sessionsList = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getSessionsList = () => {

    }
}

export default new SessionsDescriptionStore();