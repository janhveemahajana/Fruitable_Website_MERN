import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid package
import { CartContext } from "../Cart/CartContext";

const CheckoutContent = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Fetch cart items from the API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cartgetAll");
        const mappedItems = response.data.map((item) => ({
          ...item,
          id: uuidv4(),
          name: item.productname,
          img: `http://localhost:5000${item.image}`,
          quantity: item.quantity || 1,
          price: parseFloat(item.price) || 0,
        }));
        setCartItems(mappedItems); // Use setCartItems to update the state
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [setCartItems]); // Add setCartItems as a dependency


  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 1;
    return total + price * quantity;
  }, 0);

  // Flat shipping rate
  const shipping = 3.0;

  // Total calculation (Subtotal + shipping)
  const total = subtotal + shipping;
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Company Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number Street Name"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-check my-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Account-1"
                    name="Accounts"
                    value="Accounts"
                  />
                  <label className="form-check-label" for="Account-1">
                    Create an account?
                  </label>
                </div>
                <hr />
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Address-1"
                    name="Address"
                    value="Address"
                  />
                  <label className="form-check-label" for="Address-1">
                    Ship to a different address?
                  </label>
                </div>
                <div className="form-item">
                  <textarea
                    name="text"
                    className="form-control"
                    spellcheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Oreder Notes (Optional)"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                          <img
                          src={item.img}
                          className="img-fluid rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt={item.name}
                        />
                          </div>
                        </th>
                        <td className="py-5">{item.name}</td>
                        <td className="py-5">${item.price.toFixed(2)}</td>
                        <td className="py-5">{item.quantity}</td>
                        <td className="py-5">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                      ))}
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Subtotal</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">${subtotal.toFixed(2)}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-4">Shipping</p>
                        </td>
                        <td colspan="3" className="py-5">
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-1"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-1"
                            >
                              Free Shipping
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-2"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-2"
                            >
                              Flat rate: ${shipping.toFixed(2)}
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-3"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-3"
                            >
                              Local Pickup: $8.00
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark text-uppercase py-3">
                            TOTAL
                          </p>
                        </td>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">${total.toFixed(2)}</p>
                          </div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Transfer-1"
                        name="Transfer"
                        value="Transfer"
                      />
                      <label className="form-check-label" for="Transfer-1">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-start text-dark">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Payments-1"
                        name="Payments"
                        value="Payments"
                      />
                      <label className="form-check-label" for="Payments-1">
                        Check Payments
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Delivery-1"
                        name="Delivery"
                        value="Delivery"
                      />
                      <label className="form-check-label" for="Delivery-1">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Paypal-1"
                        name="Paypal"
                        value="Paypal"
                      />
                      <label className="form-check-label" for="Paypal-1">
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="button"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
