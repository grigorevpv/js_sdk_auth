import * as HttpStatus from 'http-status-codes';

import { UserPassAuthorizationData } from './UserPassAuthorizationData';
import { AuthorizationData } from './AuthorizationData';

export class AuthApi {

    constructor(context) {
        this._context = context;
    }

    /** Returns context instance */
    get Context() {
        return this._context;
    }

    /**
     * Returns an instance of `AuthorizationData` if the email and password are correctly entered
     * Otherwise returns `null`
     * @param email User email
     * @param password User password
     */
    async LoginAsync(email, password) {
        const data = new UserPassAuthorizationData(email, password);
        const response = await this._context.PostAsync('/api/v1/auth/sign-in/', data);
        if (response.StatusCode === HttpStatus.OK) {
            const authData = await response.GetJsonAsync(null);
            console.log('authData = ', authData);
            // this.UpdateContext(authData);
            return authData;
        }
        return null;
    }

    UpdateContext(authData) {
        this._context.SetToken(authData.Jwt, '');
        this._context.UserId = authData.UserId;
    }

    /**
     * Clear current context
     */
    async LogoutAsync() {
        this._context.Clear();
    }
}