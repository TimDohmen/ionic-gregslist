import { AppState } from "../AppState"
import { api } from "./AxiosService"


class AccountService {

  async getAccount(){
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const accountService = new AccountService()