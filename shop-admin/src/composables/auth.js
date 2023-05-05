import { useCookies } from "@vueuse/integrations/useCookies";

const TokenKey = 'token';

const cookie = useCookies();

export function getToken(){
    return cookie.get(TokenKey)
}

export function setToken(token){
    cookie.set(TokenKey,token)
}

export function removeToken(){
    return cookie.remove(TokenKey)
}