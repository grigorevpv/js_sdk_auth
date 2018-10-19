import { ApiContext } from '@tic/sdkhelper';
import { AuthApi } from '../TicSdkAuth/AuthApi';

describe('Get userId and token', async () => {
    it('JSON object with userId and token', async () => {
        const email = 'asd@asd.ru';
        const password = 'asdasd1';
        const host = 'localhost';
        console.log('try context');
        const context = new ApiContext(host, false);
        console.log('try auth api');
        const authApi = new AuthApi(context);
        console.log('try auth login');
        const authData = await authApi.LoginAsync(email, password);
        console.log('check user Id, authdata = ', authData);
    });
});