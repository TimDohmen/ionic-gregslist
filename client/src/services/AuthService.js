import { audience, clientId, domain } from "../AuthConfig"
import router from "../router/index"
import { initialize } from '@bcwdev/auth0provider-client'
import { setBearer } from "./AxiosService"
import { AppState } from "../AppState"
import { accountService } from './AccountService'


export const AuthService = initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetURL ? appState.targetURL : window.location.pathName
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async function () {

  setBearer(AuthService.bearer)
  console.log(AuthService.user)
  AppState.user = AuthService.user
  await accountService.getAccount()

})

