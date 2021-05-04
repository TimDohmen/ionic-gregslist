import { dbContext } from "../db/DbContext";

class CarsService {

  async find(query = {}) {
    const cars = await dbContext.Cars.find(query)
    return cars
  }

  async findOne(query = {}) {
    const cars = await dbContext.Cars.findOne(query).populate("creator")
    return cars
  }

  async create(body) {
    const car = await dbContext.Cars.create(body)
    return car
  }

}

export const carsService = new CarsService();