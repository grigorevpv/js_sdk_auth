export class UserPassAuthorizationData {

  constructor(email, password) {
    this.Email = email;
    this.Password = password;
  }

  toJSON() {
    return {
      email: this.Email,
      password: this.Password,
    };
  }

}