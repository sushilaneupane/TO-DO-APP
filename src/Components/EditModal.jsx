function EditModal({ editText, setEditText, saveEdit, cancelEdit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen overflow-y-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h3 className="text-lg font-semibold mb-2">Edit task:</h3>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />
        <div className="flex justify-end space-x-3">
          <button
            onClick={cancelEdit}
            className="px-4 py-2 rounded-md border"
          >
            Cancel
          </button>
          <button
            onClick={saveEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
