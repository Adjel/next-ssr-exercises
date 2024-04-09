"use client";
import React from "react";
import Spinner from "../../../components/Spinner";
import CartTable from "./CartTable";

function CheckoutFlow({ items, taxRate, handleDeleteItem }) {
  if (items === null) {
    return (
      <div className="checkout-flow empty">
        <Spinner />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="checkout-flow empty">
        <p>Your cart is empty</p>
      </div>
    );
  }

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = calculateSubtotal(items);
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="checkout-flow">
      <CartTable items={items} handleDeleteItem={handleDeleteItem} />

      <table className="checkout-totals">
        <tbody>
          <tr>
            <th scope="col">Subtotal</th>
            <td>{priceFormatter.format(subtotal)}</td>
          </tr>
          <tr>
            <th scope="col">Taxes</th>
            <td>{priceFormatter.format(taxes)}</td>
          </tr>
          <tr>
            <th scope="col">Total</th>
            <td>{priceFormatter.format(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function calculateSubtotal(items) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  return subtotal;
}

export default CheckoutFlow;
