import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid package
import { CartContext } from "./CartContext";

function CartPage() {
  const {cartItems, setCartItems} = useContext(CartContext);

  // Fetch cart items from the API
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/cartgetAll"
        );
        const mappedItems = response.data.map((item) => ({
          ...item,
          id: uuidv4(), // Assign a unique id
          name: item.productname,
          img: `http://localhost:5000${item.image}`,
          quantity: item.quantity || 1, // Default to 1 if no quantity is provided
          price: parseFloat(item.price) || 0, // Ensure price is a number
        }));
        setCartItems(mappedItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Handle quantity change (increment or decrement)
  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item
      )
    );
  };

  // Calculate the subtotal (sum of all items' price * quantity)
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 1;
    return total + price * quantity;
  }, 0);

  // Flat shipping rate
  const shipping = 3.0;

  // Total calculation (Subtotal + shipping)
  const total = subtotal + shipping;


  const deleteUser = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/cartdelete/${productId}`)
      .then((response) => {
        console.log(response);
        setCartItems((prevProduct) =>
          prevProduct.filter((product) => product._id !== productId)
        );
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="col">Products</th>
                  <th className="col">Name</th>
                  <th className="col">Price</th>
                  <th className="col">Quantity</th>
                  <th className="col">Total</th>
                  <th className="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <th className="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.img}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt={item.name}
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item.name}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">${item.price.toFixed(2)}</p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: "100px" }}
                      >
                        <button
                          className="btn btn-sm btn-minus rounded-circle bg-light border"
                          onClick={() => handleQuantityChange(item.id, -1)} // Update only the clicked item
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btny btn-sm btn-plus rounded-circle bg-light border"
                          onClick={() => handleQuantityChange(item.id, 1)} // Update only the clicked item
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4">
                        <i
                          onClick={() => deleteUser(item._id)}
                          className="fa fa-times text-danger"
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary"
              type="button"
            >
              Apply Coupon
            </button>
          </div>

          <div className="row g-4 justify-content-end">
            <div className="col-8"></div>
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <p className="mb-0">Flat rate: ${shipping.toFixed(2)}</p>
                  </div>
                  <p className="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">${total.toFixed(2)}</p>
                </div>
                <Link to={'/checkout'}><button
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                >
                  Proceed Checkout
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
