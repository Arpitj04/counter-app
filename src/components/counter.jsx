import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.counter.value
    //,imageUrl: "https://picsum.photos/200"
    //,tags: ["tag1", "tag2", "tag3"]
  };*/

  /* constructor() {
    super();
    this.handleIncrement.bind(this);
  } 

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/

  /*handleIncrement = product => {
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  };*/

  componentDidUpdate(prevProps, PrevStates) {
    console.log(prevProps, PrevStates);
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  render() {
    //console.log("props:", this.props.counter.formatValue);
    console.log("Counter - Rendered!");
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <div>
          {this.props.children}
          <h4>{this.props.counter.id}</h4>
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* {this.renderTags()} */}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
