import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    tokenName: string = 'token'

    constructor() {}

    // method to get token from localStorage
    public get token(): Token {
        let result: any = {
            jwt: '',
            expire: '',
        }
        if (!localStorage.getItem(this.tokenName)) return result;
        result = localStorage.getItem(this.tokenName);
        return JSON.parse(result);
    }

    // method to set our token into localStorage
    public set token(value: Token) {
        localStorage.setItem(this.tokenName, JSON.stringify(value));
    }
}

export interface Token {
    jwt: string;
    expire: string;
}
