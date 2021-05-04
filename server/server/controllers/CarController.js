import { Auth0Provider } from "@bcwdev/auth0provider";
import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";


export class CarController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getAll)
      .get('/:_id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      res.send(await carsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await carsService.findOne(req.params))
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