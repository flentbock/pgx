export class User {

  id: any;
  username = '';
  password = '';
  firstname = '';
  lastname = '';
  birthdate: Date = null;
  email = '';
  telephonenumber = '';
  job = '';
  avatar = '';
  description = '';
  activateaccount: true;

  constructor() {}

  /*
    constructor(
      public nom: string,
      public prenom: string,
      public email: string,
      public dateNaissance: Date,
      public tel: string,
      public photo: string) {
    }
  */
}
