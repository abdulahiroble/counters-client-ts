import ICounter from "../models/counter";

let counters: ICounter[] = [
  { id: 1, value: 0, liked: false },
  { id: 2, value: 0, liked: false },
  { id: 3, value: 0, liked: false },
];

function getCounters(): ICounter[] {
  return counters;
}

function getCounter(id: number): ICounter | undefined {
  return counters.find((c) => c.id === id);
}

function addCounter(): ICounter[] {
  const newId = counters.length ? counters[counters.length - 1].id + 1 : 1;
  const newCounter: ICounter = { id: newId, value: 0, liked: false };
  counters.push(newCounter);
  return counters;
}

// increment:
//+1 -> increment
//-1 -> decrement
//0 -> change liked attribute
function updateCounter(
  counter: ICounter,
  increment: number
): ICounter | undefined {
  let counterInDb: ICounter | undefined = counters.find(
    (c) => c.id === counter.id
  );
  if (!counterInDb) return;

  counterInDb.value = counter.value + increment;
  counterInDb.liked = increment ? counterInDb.liked : !counterInDb.liked;
  return counterInDb;
}

function deleteCounter(id: number): ICounter | undefined {
  let counterInDb: ICounter | undefined = counters.find((m) => m.id === id);
  if (!counterInDb) return;

  counters.splice(counters.indexOf(counterInDb), 1);
  return counterInDb;
}

function deleteAll(): void {
  counters = [];
}

function resetAll(): void {
  counters.forEach((element) => {
    element.value = 0;
  });
}

const FakeService = {
  getCounters,
  getCounter,
  addCounter,
  updateCounter,
  deleteCounter,
  deleteAll,
  resetAll,
};

export default FakeService;
