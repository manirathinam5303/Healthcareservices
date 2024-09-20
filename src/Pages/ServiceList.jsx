import React, { useState } from "react";
import { EditableText } from "@blueprintjs/core";
import "./serviceslist.css";

const ServiceList = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("ServiceData")) || [
      { Id: 1, Name: "stves", email: "stves123@gmail.com", Description: "Service 1", price: "100" },
      { Id: 2, Name: "John", email: "john.doe@gmail.com", Description: "Service 2", price: "200" },
      { Id: 3, Name: "Jane", email: "jane.doe@gmail.com", Description: "Service 3", price: "300" },
      { Id: 4, Name: "Alice", email: "alice@example.com", Description: "Service 4", price: "400" },
      { Id: 5, Name: "Bob", email: "bob@example.com", Description: "Service 5", price: "500" },
    ]
  );

  const handleChange = (value, field, index) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  const handleUpdate = () => {
    const updatedData = [...data];
    localStorage.setItem("ServiceData", JSON.stringify(updatedData));
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("ServiceData", JSON.stringify(updatedData));
  };

  return (
    <div className="container-fluid table_container table-container">
      <div className="row">
        <h1 className="service_title">Service List</h1>
        <div className="col-sm-12">
          <div className="table-responsive">
            <table border={1} className="styled-table table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Email</th>
                  <th>Price$</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <EditableText
                        value={item.Id}
                        onChange={(value) => handleChange(value, "id", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.Name}
                        onChange={(value) => handleChange(value, "Name", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.Description}
                        onChange={(value) => handleChange(value, "description", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.email}
                        onChange={(value) => handleChange(value, "email", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.price}
                        onChange={(value) => handleChange(value, "price", index)}
                      />
                    </td>
                    <td>
                      <div className="btns">
                        <button
                          className="btn btn-success ml-3"
                          onClick={() => handleUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
