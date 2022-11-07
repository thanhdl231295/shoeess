import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>Chi tiết sản phẩm</h1>
        <img src={this.props.selectedItem.image} alt="" />
        <h3>tên SP: {this.props.selectedItem.name} </h3>
        <h3>giá SP: {this.props.selectedItem.price} </h3>
        <h3>Số Lượng: {this.props.selectedItem.quantity} </h3>
      </div>
    );
  }
}
