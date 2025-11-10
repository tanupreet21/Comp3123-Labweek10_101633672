import { useState } from "react";

function DataForm(){

    const [formData, setFormData] = useState({
        email:"",
        name:"",
        address1:"",
        address2:"",
        city:"",
        province:"",
        postalCode:"",
        agree:""

    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const {name, value, type, checked}   = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox"? checked : value,
        })); 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the page from reloading
        setSubmittedData(formData);
    };

    return(
        <div style={{padding:"20px"}}>
        <h1>Data Entry Form</h1>
        <form 
            onSubmit={handleSubmit}
            style={{
                maxWidth: "700px",
                margin: "auto",
                display: "flex",
                flexDirection:"column",
                gap: "15px",
                padding: "20px",
                borderRadius: "10px"
                
            }}>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap"}}>    
            <div style={{ flex:1, minWidth: "250px"}}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    required
                />
            </div>
            <div style={{ flex:1, minWidth: "250px"}}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    style={{width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft:"5px" }}
                    required
                />
            </div>
            </div>
            <div>
                <label>Address 1</label>
                <input
                    type="text"   
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    placeholder="ABC street"
                    style={{width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    required
                />
            </div>
            <div>
                <label>Address 2</label>
                <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    style={{width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    placeholder="Apartment, studio or floor"
                />
            </div>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap"  }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    required
                />
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
                <label>Province</label>
                <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft:"10px" }}
                    required
                >
                    <option value="">Choose</option>
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Prince Edward Island">Prince Edward Island</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                </select>
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
                <label>Postal Code</label>
                <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    required
                />
            </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    
                />
                <label>Agree to terms & conditions?</label>
            </div>
            <button 
                type="submit"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#2c3e50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}    
            >Submit</button>
        </form>
        {submittedData && (
                <div
                style={{
                  marginTop: "40px",
                  textAlign: "center",
                  backgroundColor: "#f1f2f6",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                 <h2 style={{ color: "#2c3e50" }}>Submitted Information</h2>
                <p><strong>Email: </strong>{submittedData.email}</p>
                <p><strong>Full Name: </strong>{submittedData.name}</p>
                <p>
                    <strong>Address: </strong>
                    {submittedData.address2 ? `${submittedData.address1}, ${submittedData.address2}`:
                    submittedData.address1}
                </p>
                <p><strong>City: </strong>{submittedData.city}</p>
                <p><strong>Province: </strong>{submittedData.province}</p>
                <p><strong>Postal Code: </strong>{submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );

}

export default DataForm;