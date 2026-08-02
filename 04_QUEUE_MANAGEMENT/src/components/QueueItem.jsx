function QueueItem({ customer, onUpdateStatus, onRemove }) {
  return (
    <div className="queue-item">
      <div className="queue-item-info">
        <strong>{customer.name}</strong> {customer.service}{" "}
        <span className={`status ${customer.status}`}>{customer.status}</span>
      </div>

      <div className="queue-actions">
        {customer.status === "waiting" && (
          <button
            className="btn-serve"
            onClick={() => onUpdateStatus(customer.id, "serving")}
          >
            Serve
          </button>
        )}

        {customer.status === "serving" && (
          <button
            className="btn-complete"
            onClick={() => onUpdateStatus(customer.id, "completed")}
          >
            Complete
          </button>
        )}

        <button className="btn-remove" onClick={() => onRemove(customer.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default QueueItem;
