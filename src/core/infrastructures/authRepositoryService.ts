import { loginData, signUpData} from '../entities/authEntity';
import { IAuthRepository } from '../entities/authRepository';
import axios from 'axios';

let domain = 'API_URL_DOMAIN'

export class AuthRepositoryService implements IAuthRepository {

  // implementation SignInService through call api
  async SignInService(request:loginData): Promise<any> {
    return await axios({
      method: 'POST',
      url: `${domain}/api/membership/authenticate`,
      data: request
    });
  }

  async SignUpService(request: signUpData): Promise<any> {
    // implementation signup service --> post data to api
  }
}