export interface RegistrationFormValues {
  login: string;
  companyName: string;
  password: string;
}

export interface ProfileInfoValues {
  email: string;
  companyName: string;
  accessKey: string;
  notificationDelay: any;
}

export interface LoginFormInitialValues {
  login: string;
  password: string;
}

export type JwtType = {
  authToken: string;
  accessToken: string;
}

export type AxiosResponse = {
  code: number | undefined;
  message: string | undefined;
}