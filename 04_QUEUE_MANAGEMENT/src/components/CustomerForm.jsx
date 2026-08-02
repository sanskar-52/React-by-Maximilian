import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
function CustomerForm(props) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  function handleSubmit() {
    if (name == "" || service == "") return;
    props.onAddCustomer({ name: name, service: service });
    setName("");
    setService("");
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <select
              value={service}
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <option value="" disabled hidden>
                Select a service
              </option>
              <option value="Consultation">Consultation</option>
              <option value="Payment">Payment</option>
              <option value="Support">Support</option>
            </select>
          </div>
          <button type="submit">
            <FaUserPlus />
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomerForm;
