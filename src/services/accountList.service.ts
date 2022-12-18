import { http } from "api/http";

export const urlDetail = '/account-list/:id'

export const getAccount = async () => {
    const response = await http.get('/accounts')
    return response.data
};

export const Getho = async (url:string) => {
    const response = await http.get(url)
    return response.data
};

export const get = (url:string) => {
    return http.get(url);
}




const AccountListService = {
    get
};

export default AccountListService;