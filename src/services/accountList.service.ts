import { http } from "api/http";

export const urlDetail = '/account-list/:id'

const get = (url:string) => {
    return http.get(url);
};

const AccountListService = {
    get
};

export default AccountListService;