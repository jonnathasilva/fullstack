import { Vehicle } from "../models/Vehicle";

export default class vehicleController {
  static async getVehicles(req, res) {
    const vihicles = await Vehicle.find();
    return res.status(200).json(vihicles);
  }

  static async VehiclesMyId(req, res) {
    const id = req.params.id;

    const vehicle = await Vehicle.findOne({ _id: id });

    if (!vehicle) {
      return res.status(400).json({ message: "Veiculo não foi encontrado!" });
    }

    try {
      return res.status(200).json(vehicle);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async createVehicle(req, res) {
    const { vehicle, brand, year, description } = req.body;

    if (!vehicle || vehicle === " ") {
      return res
        .status(400)
        .json({ message: "O campo veiculo e obrigatorio!" });
    }

    if (!brand || brand === " ") {
      return res.status(400).json({ message: "O campo marca e obrigatorio!" });
    }

    if (!year || year === " ") {
      return res.status(400).json({ message: "O campo ano e obrigatorio!" });
    }

    if (!description || description === " ") {
      return res
        .status(400)
        .json({ message: "O campo descrição e obrigatorio!" });
    }

    try {
      const newVehicle = await Vehicle.create({
        vehicle,
        brand,
        year,
        description,
        sold: false,
      });

      return res.status(200).json(newVehicle);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async putVehicle(req, res) {
    const id = req.params.id;
    const { vehicle, brand, year, description, sold } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID não foi encontrado!" });
    }

    if (!vehicle || vehicle === " ") {
      return res
        .status(400)
        .json({ message: "O campo veiculo e obrigatorio!" });
    }

    if (!brand || brand === " ") {
      return res.status(400).json({ message: "O campo marca e obrigatorio!" });
    }

    if (!year || year === " ") {
      return res.status(400).json({ message: "O campo ano e obrigatorio!" });
    }

    if (!description || description === " ") {
      return res
        .status(400)
        .json({ message: "O campo descrição e obrigatorio!" });
    }

    try {
      const updateVehicle = await Vehicle.findOneAndUpdate(
        { _id: id },
        { vehicle, brand, year, description, sold }
      );
      return res.status(200).json(updateVehicle);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async patchVehicle(req, res) {
    const id = req.params.id;
    const { vehicle, brand, year, description, sold } = req.body;

    const MyVehicle = await Vehicle.findOne({ _id: id });

    if (!MyVehicle) {
      return res.status(400).json({ message: "Veiculo não foi encontrado!" });
    }

    if (vehicle || vehicle !== " ") {
      MyVehicle.vehicle = vehicle;
    }

    if (brand || brand !== " ") {
      MyVehicle.brand = brand;
    }

    if (year || year !== " ") {
      MyVehicle.year = year;
    }

    if (description || description !== " ") {
      MyVehicle.description = description;
    }

    if (sold || sold !== " ") {
      MyVehicle.sold = sold;
    }

    try {
      const updateVehicle = await Vehicle.findOneAndUpdate(
        { _id: id },
        MyVehicle
      );
      return res.status(200).json(updateVehicle);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteVehicle(req, res) {
    const id = req.params.id;

    const vehicle = Vehicle.findOne({ _id: id });

    if (!vehicle) {
      return res.status(400).json({ message: "Veiculo não foi encontrado!" });
    }

    const deleteById = await Vehicle.findOneAndDelete({ _id: id });
    return res.status(200).json(deleteById);
  }

  static async getSearch(req, res) {
    const { search } = req.body;

    if (!search || search === " ") {
      return res.status(400);
    }

    const Search = await Vehicle.find({
      $or: [{ vehicle: search }, { brand: search }, { description: search }],
    });

    return res.status(200).json(Search);
  }
}
