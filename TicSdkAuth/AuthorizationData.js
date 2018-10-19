export class AuthorizationData {

  fromJSON(data) {
      this.UserId = data['userId'];
      this.Jwt = data['jwt'];
      return this;
  }

}