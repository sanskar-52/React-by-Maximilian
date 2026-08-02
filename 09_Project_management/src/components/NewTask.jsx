import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [eneteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  // in handleClick forward the entered value to the app component and reset the input field.
  function handleClick() {
    if (eneteredTask.trim() === "") return;
    onAdd(eneteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={eneteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-900"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
