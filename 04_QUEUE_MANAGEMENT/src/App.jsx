import { useState } from "react";

import "./App.css";
import CustomerForm from "./components/CustomerForm.jsx";
import QueueList from "./components/QueueList.jsx";

function App() {
  const [queue, setQueue] = useState([]);

  function addCustomer(customer) {
    setQueue((prev) => {
      // console.log(customer);
      return [...prev, { ...customer, id: Date.now(), status: "waiting" }];
    });
  }

  function updateStatus(id, newStatus) {
    setQueue((prevQueue) =>
      prevQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  }

  function removeFromQueue(id) {
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id));
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Queue Form</h1>
        <CustomerForm onAddCustomer={addCustomer} />
      </div>
      <div style={{ marginTop: "30px", marginLeft: "20px" }}>
        <h2>Current Queue:</h2>
        <QueueList
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
    </>
  );
}

export default App;
