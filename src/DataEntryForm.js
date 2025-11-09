
function DataForm(){

    return(
        <>
        <h1>Data Entry Form</h1>
        <form>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                />
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                />
            </div>
            <div>
                <label>Address 1</label>
                <input
                    type="text"   
                    name="address1"
                />
            </div>
            <div>
                <label>Address 2</label>
                <input
                    type="text"
                    name="address2"
                />
            </div>
            <div>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                />
            </div>
            <div>
                <label>Province</label>
                <select>
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
            <div>
                <label>Postal Code</label>
                <input
                    type="text"
                    name="postal code"
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    name="terms"
                />
                <label>Agree to terms & conditions?</label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    );

}

export default DataForm;