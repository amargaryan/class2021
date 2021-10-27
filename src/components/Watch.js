import React from "react";
import Watch2 from "./Watch2";

class Watch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date(), gago:'gago' };
    }
  
    componentDidMount() {
      this.intervalId = setInterval(() => this.watchRenderer(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    watchRenderer() {
      this.setState({
        date: new Date(),
      });

    }
  
    render() {
      return <div>
          {this.state.date.toLocaleTimeString()}
            <Watch2 gago={this.state.gago}/>
            <Watch2>asdasfsadfsdfsd</Watch2>
           </div>;

    }
  }

  export default Watch