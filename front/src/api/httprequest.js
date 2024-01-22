import axios from "axios";

export async function getAll() {
  let watches;
  await axios.get("http://localhost:7070/api/watches").then(res => {
  watches = res.data;
  });
  return watches;
}

export async function getById(id) {
  let watch;
  await axios.get(`http://localhost:7070/api/watches/${id}`).then((res) => {
  watch = res.data;
  });
  return watch;
}

export async function postData(payload) {
  let newData;
  await axios.post("http://localhost:7070/api/watches", payload).then(res => {
    newData = res.data;
  });
  return newData;
}

export async function deleteById(id) {
  let deletedWatch;
  await axios.delete(`http://localhost:7070/api/watches/${id}`).then(res => {
  deletedWatch = res.data;
  });
  return deletedWatch
}