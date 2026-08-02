import QueueItem from "./QueueItem";

function QueueList({ queue, onUpdateStatus, onRemove }) {
  if (queue.length === 0) return <p>No customers found.</p>;

  return (
    <div className="queue-container">
      {queue.map((customer) => (
        <QueueItem
          key={customer.id}
          customer={customer}
          onUpdateStatus={onUpdateStatus}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default QueueList;
