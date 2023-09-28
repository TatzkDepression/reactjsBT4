import React, { Component } from "react";
import { connect } from "react-redux";
import { Delete, Quantity } from "./Redux/action/shoe";

class Cart extends Component {
  renderTbody = (cart, handleChangeQuantity) => {
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <strong className="mx-2">{item.soLuong}</strong>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id, +1);
              }}
              className="btn btn-dark"
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    let { cart } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody(cart)}</tbody>
      </table>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.shoe.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(Delete(id));
    },
    handleChangeQuantity: (id, option) => {
      // payload:{id:id,option:option}
      dispatch(Quantity(id, option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
