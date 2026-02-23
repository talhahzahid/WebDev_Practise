import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? input : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };
  const handleEdit = (index) => {
    setInput(data[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h2>Simple CRUD App</h2>

      <form onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <hr />

      {/* READ */}
      {data.length === 0 && <p>No data available</p>}

      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <span>{item}</span>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Home;
