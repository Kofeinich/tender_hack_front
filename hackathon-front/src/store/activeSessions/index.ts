import { configure, action, isObservable, makeAutoObservable, observable, toJS } from 'mobx';
import {
    RegistrationFormValues,
    JwtType,
    AxiosResponse,
    LoginFormInitialValues,
    ProfileInfoValues
} from '../../views/auth/types';
import { observer } from 'mobx-react-lite';
import * as activeSessionsApi from '../../api/activeSessions';
import { errorToast } from "../../components/alerts/fail";
import {convertDateToMinutes} from "../../utils/convertDate";
import {sortingArr} from "../../utils/betsAlghoritm";

// const sessions = [
//     {
//         id: 7,
//         sessionName: 'Набор лампочек',
//         customerName: 'Администрация Петроградского района',
//         currentPrice: 2000,
//         start: '2022-04-16T20:14:40',
//         end: '2022-04-17T20:14:40',
//         bet: 0.05,
//         location: 'г. Санкт-Петербург',
//         lastCustomerBet: '',
//         status: 'ACTIVE',
//         botSettingDto: { id: 3, priority: 0, timeDelay: '00:20:00', minPay: 450 }
//     },
//     {
//         id: 4,
//         sessionName: 'Отчистка вентиляци',
//         customerName: 'Центр по работе с населением "Преображенец"',
//         currentPrice: 13500,
//         start: '2022-04-16T19:56:40',
//         end: '2022-04-17T08:10:00',
//         bet: 0.05,
//         location: 'г. Санкт-Петербург',
//         lastCustomerBet: 'Поставщик концелярских товаров',
//         status: 'CLOSE',
//         botSettingDto: { id: 4, priority: 0, timeDelay: '00:20:00', minPay: 0.0 }
//     },
//     {
//         id: 6,
//         sessionName: 'Концелярские товары',
//         customerName: 'Академия цифровых технологий',
//         currentPrice: 8000,
//         start: '2022-04-16T19:55:40',
//         end: '2022-04-17T19:55:40',
//         bet: 0.05,
//         location: 'г. Санкт-Петербург',
//         lastCustomerBet: '',
//         status: 'ACTIVE',
//         botSettingDto: { id: 5, priority: 0, timeDelay: '00:20:00', minPay: 0.0 }
//     },
//     {
//         id: 10,
//         sessionName: 'Обновление операциооной системы',
//         customerName: 'Академия цифровых технологий',
//         currentPrice: 20000,
//         start: '2022-04-16T19:56:40',
//         end: '2022-04-17T19:56:40',
//         bet: 0.05,
//         location: 'г. Санкт-Петербург',
//         lastCustomerBet: '',
//         status: 'ACTIVE',
//         botSettingDto: { id: 6, priority: 0, timeDelay: '00:20:00', minPay: 0.0 }
//     },
//     {
//         id: 11,
//         sessionName: 'New obj',
//         customerName: 'Академия цифровых технологий',
//         currentPrice: 20000,
//         start: '2022-04-16T19:56:40',
//         end: '2022-04-17T19:56:40',
//         bet: 0.05,
//         location: 'г. Санкт-Петербург',
//         lastCustomerBet: '',
//         status: 'ACTIVE',
//         botSettingDto: { id: 7, priority: 0, timeDelay: '00:20:00', minPay: 0.0 }
//     }
// ]

class ActiveSessionsStore {
    activeSessionsList: any = [];
    responseStatus: AxiosResponse = {
        code: undefined,
        message: '',
    };
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.getActiveSessionsInfo();
    }

    @action
    getActiveSessionsInfo = async () => {
        const token = localStorage.getItem('authToken');
        this.isLoading = true;
        return activeSessionsApi.getAutoSessionsApi(token).then(res => this.activeSessionsList = sortingArr(res))
        // return this.activeSessionsList = sortingArr(sessions);
        this.isLoading = false;
    }

    // @action
    // saveUserProfileInfo = (token: string | null, userData: ProfileInfoValues) => {
    //     return profileApi.saveUserProfileInfoApi(token, userData).then(res => {
    //         if(res?.status === 200) {
    //             this.responseStatus = {
    //                 code: res.status,
    //                 message: 'Данные успешно изменились!'
    //             }
    //             return res;
    //         } else {
    //             this.responseStatus = {
    //                 code: res?.status,
    //                 message: res?.data
    //             }
    //         }
    //     });
    // }
}

export default new ActiveSessionsStore();
