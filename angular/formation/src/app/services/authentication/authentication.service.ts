import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  //constante
  private static readonly TOKEN = 'authentication';

  constructor() {}

  public login(): boolean {
    // -----Etape a faire pour le login
    //récupérer username/password
    //Requete HTTP vers API (POST)
    // => récuperer le token
    localStorage.setItem(
      AuthenticationService.TOKEN,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    );
    return true;
  }
  public logout(): boolean {
    localStorage.removeItem(AuthenticationService.TOKEN);
    return false;
  }
  public isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticationService.TOKEN) != null;
  }

  public getToken(): string | null {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }
}
