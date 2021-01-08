import { loginData } from '../entities/authEntity';
import { IAuthRepository } from '../entities/authRepository';

export interface IAuthService {
  SignInService(request: loginData): Promise<any>;
}


/**
 * Auth service.
 * Any business logic with the data from repository
 * will be evaluated here.
 */
export class AuthService implements IAuthService {
  authRepo: IAuthRepository;

  constructor(repo: IAuthRepository){
    this.authRepo = repo;
  }

  async SignInService(request: loginData):Promise<any> {
    return this.authRepo.SignInService(request);
  }

}