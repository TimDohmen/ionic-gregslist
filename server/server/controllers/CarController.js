import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";


export class CarController extends BaseController{
  constructor(){
    super('api/cars')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAll)
    .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      res.send(await carsService.find(req.params))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await carsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

}