import axios from "axios";
import ICounter from "../models/counter";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class CountersService {
  getAll() {
    return axios.get("counters");
  }

  deleteAll() {
    return axios.delete("counters");
  }

  add() {
    return axios.post("counters");
  }

  delete(id: number) {
    return axios.delete("counters/" + id);
  }

  increment(counter: ICounter) {
    const incrementedCounter = { ...counter };
    incrementedCounter.value++;
    return axios.put("counters/" + counter.id, incrementedCounter);
  }

  decrement(counter: ICounter) {
    const decrementedCounter = { ...counter };
    decrementedCounter.value--;
    return axios.put("counters/" + counter.id, decrementedCounter);
  }

  like(counter: ICounter) {
    const likedCounter = { ...counter };
    likedCounter.liked = !likedCounter.liked;
    console.log(likedCounter);
    return axios.put("counters/" + counter.id, likedCounter);
  }

  resetAll() {
    return axios.put("counters/");
  }
}

export default new CountersService();
