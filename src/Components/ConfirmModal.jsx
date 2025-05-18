import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-700/70 z-50 flex justify-center items-center w-full">
      <div className=" bg-neutral-900 w-[30%] max-w-md rounded-lg shadow-xl py-10 px-2 text-neutral-700 flex flex-col gap-5">
        <h2 className="text-xl font-semibold mb-4 text-white text-center">Are you sure?</h2>
        <p className="mb-6 text-white text-center">This action cannot be undone.</p>

        <div className="flex justify-center gap-10">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-600 text-white rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
