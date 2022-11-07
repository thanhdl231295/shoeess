import React, { Component } from "react";
import styles from "./ProductItem.module.css";
export default class ProductItem extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={this.props.product.image} alt="" />
        <h2>Name: {this.props.product.name}</h2>
        <h2> Price:{this.props.product.price} </h2>
        <button className={styles.btn}>Thêm vào giỏ hàng</button>
        <br />
        <br />
        <button
          onClick={() => {
            this.props.setSelectedItem(this.props.product);
          }}
          className={styles.btn}
        >
          Xem chi tiết
        </button>
      </div>
    );
  }
}
