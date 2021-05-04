import { api } from "./AxiosService"
import { AppState } from "../AppState"

class CarsService {

  async getCars() {
    try {
      const res = await api.get('/api/cars')
      console.log(res.data)
      AppState.cars = res.data
    } catch (error) {
      console.error(error)
    }
  }
  async getCar(id) {
    try {
      const res = await api.get(`/api/car/${id}`)
      console.log(res.data)
      AppState.car = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createCar(carData) {
    try {
      await api.post('/api/cars', carData)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
  }

}

export const carsService = new CarsService()