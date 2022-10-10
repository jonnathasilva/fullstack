import axios from "axios";

export async function getSearch(Search) {
  await api
    .post("/veiculos/find", { search: Search })
    .then(({ data }) => {
      setVehicle(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getAll() {
  return await axios.get("http://localhost:5000/veiculos");
}

export async function getById(id) {
  await api.get(`/veiculos/${id}`).then(({ data }) => {
    setVehicleById(data);
  });
}

export async function add(data, reset) {
  // await axios
  //   .post("http://localhost:5000/veiculos", data)
  //   .then(() => {
  //     reset();
  //     // setIsModal(false);
  //     getAll();
  //   })
  //   .catch(() => {
  //     return [];
  //   });
  try {
    return await axios.post("http://localhost:5000/veiculos", data);
  } catch (error) {
    return [];
  }
}

export async function editVehicle(data, id, reset) {
  await api
    .patch(`/veiculos/${id}`, data)
    .then(() => {
      reset();
      setIsModalEdit(false);
      GetById(id);
      GetAll();
    })
    .catch((err) => console.log(err));
}

export async function deleteById(id) {
  console.log(id);
  await api
    .delete(`/veiculos/${id}`)
    .then(() => {
      setIsModalEdit(false);
      setVehicleById("");
      GetAll();
    })
    .catch((err) => console.log(err));
}
