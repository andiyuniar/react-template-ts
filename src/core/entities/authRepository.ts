import { loginData, signUpData } from './authEntity';

export interface IAuthRepository {
  SignInService(request: loginData): Promise<any>;

  SignUpService(request:signUpData): Promise<any>;
}