import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { detail } = this.props;
    return (
      <div>
        <img width={200} src={detail.image} alt="" />
        <h2>{detail.name}</h2>
        <p>Price: ${detail.price}</p>
        <p>Description: {detail.description}</p>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoe.detail,
  };
};
export default connect(mapStateToProps)(DetailShoe);
