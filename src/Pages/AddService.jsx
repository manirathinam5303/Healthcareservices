import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./addservice.css";
const AddService = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Id: "",
    Name: "",
    Description: "",
    email: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!formData.Id) {
      validationErrors.Id = "Service ID is required";
    }

    if (!formData.Name) {
      validationErrors.Name = "Name is required";
    }

    if (!formData.Description) {
      validationErrors.Description = "Description is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.price) {
      validationErrors.price = "Price is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const existingData =
        JSON.parse(localStorage.getItem("ServiceData")) || [];
      localStorage.setItem(
        "ServiceData",
        JSON.stringify([...existingData, formData])
      );

      alert("Service added successfully");
      setFormData({
        Id: "",
        Name: "",
        Description: "",
        email: "",
        price: "",
      });
      navigate("/servicelist");
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h1 style={{ fontWeight: "lighter", color: "white" }}>
          Add New Service
        </h1>

        <div className="mb-3">
          <input
            type="number"
            name="Id"
            placeholder="Service ID"
            value={formData.Id}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.Id && <div className="text-danger">{errors.Id}</div>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="Name"
            placeholder="Service Name"
            value={formData.Name}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.Name && <div className="text-danger">{errors.Name}</div>}
        </div>

        <div className="mb-3">
          <textarea
            name="Description"
            placeholder="Service Description"
            value={formData.Description}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.Description && (
            <div className="text-danger">{errors.Description}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <input
            type="number"
            name="price"
            placeholder="Service Price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.price && <div className="text-danger">{errors.price}</div>}
        </div>

        <div className="btn_1">
          <button type="submit" className="btn btn-primary">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
