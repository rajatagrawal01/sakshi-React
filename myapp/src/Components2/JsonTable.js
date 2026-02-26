import React ,{useState} from "react";


export default function JsonTable() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.mobile) return;

    setTableData([...tableData, formData]);

    setFormData({ name: "", age: "", mobile: "" });
  };
  console.log(tableData);
  
  return (
      <div>
        <h2>User Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>

        {tableData.length > 0 && (
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
              </tr>
            </thead>

            <tbody border='1'>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
  );
}
