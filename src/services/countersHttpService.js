import axios from "axios";

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

  delete(id) {
    return axios.delete("counters/" + id);
  }

  increment(counter) {
    const incrementedCounter = { ...counter };
    incrementedCounter.value++;
    return axios.put("counters/" + counter.id, incrementedCounter);
  }

  decrement(counter) {
    const decrementedCounter = { ...counter };
    decrementedCounter.value--;
    return axios.put("counters/" + counter.id, decrementedCounter);
  }

  like(counter) {
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
