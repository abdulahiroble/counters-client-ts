import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import CountersService from "./services/countersHttpService";

interface AppProps {
  
}
 
interface AppState {
  counters: Counter[]
  // counters: {id:number, value:number, liked:boolean}[]
}
 
type Counter = {
  id:number, value:number, liked:boolean
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counters: [],
    };
  }

  componentDidMount() {
    this.retrieveCounters();
    console.log("App component mounted");
  }

  retrieveCounters = () => {
    CountersService.getAll()
      .then((response) => {
        this.setState({
          counters: response.data,
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDelete = (counterId: number) => {
    CountersService.delete(counterId)
      .then((response) => {
        const counters = [...this.state.counters];
        const deletedCounter = counters.find((c) => c.id === counterId);
        if (deletedCounter === undefined) throw new Error("not found");
        const index = counters.indexOf(deletedCounter);
        counters.splice(index, 1);
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDeleteAll = () => {
    CountersService.deleteAll()
      .then((response) => {
        this.setState({
          counters: [],
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDecrement = (counter: any) => {
    CountersService.decrement(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        const decCounter = { ...counter };
        decCounter.value--;
        counters[index] = { ...decCounter };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleIncrement = (counter: any) => {
    CountersService.increment(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        const incCounter = { ...counter };
        incCounter.value++;
        counters[index] = { ...incCounter };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleReset = () => {
    CountersService.resetAll()
      .then((response) => {
        this.setState({ counters: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleAddCounter = () => {
    CountersService.add()
      .then((response) => {
        const counters = [...this.state.counters];
        counters.push(response.data);
        this.setState({ counters: counters });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleLike = (counter: any) => {
    CountersService.like(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        const likedCounter = { ...counter };
        likedCounter.liked = !likedCounter.liked;
        counters[index] = { ...likedCounter };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { counters } = this.state;

    return (
      <React.Fragment>
        <Navbar
          totalCounters={counters.filter((c) => c.value > 0).length}
          totalLikes={counters.filter((c) => c.liked === true).length}
        />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onAddCounter={this.handleAddCounter}
            onDeleteAll={this.handleDeleteAll}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }

}
 
export default App;






