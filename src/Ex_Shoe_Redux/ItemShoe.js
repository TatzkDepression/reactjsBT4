import React, { Component } from "react";
import { connect } from "react-redux";
import { buyShoeAction, detail } from "./Redux/action/shoe";

class ItemShoe extends Component {
  convertNameShoe = (name) => {
    let maxLength = 12;
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    } else {
      return name;
    }
  };
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="card h-100 ">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{this.convertNameShoe(name)}</h4>
            <p className="card-text">
              <button
                onClick={() => {
                  this.props.handleDetail(this.props.item);
                }}
                className="btn btn-info mr-2"
              >
                View
              </button>
              <button
                onClick={() => {
                  this.props.handleBuy(this.props.item);
                }}
                className="btn btn-success"
              >
                Add
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (shoe) => {
      dispatch(buyShoeAction(shoe));
    },
    handleDetail: (shoe) => {
      dispatch(detail(shoe));
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);
