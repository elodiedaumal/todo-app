// Modal.js
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
   const [description, setDescription] = useState("");
   const [assignee, setAssignee] = useState("");

   const handleSubmit = () => {
      onSubmit({ description, assignee });
      setDescription(""); // Clear description field
      setAssignee(""); // Clear assignee field
      onClose();
   };

   return (
      <div className={`modal ${isOpen ? "open" : ""}`}>
         <div className='modal-content'>
            <h2>Add New Todo</h2>
            <label>
               Description:
               <input
                  type='text'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
            </label>
            <label>
               Assignee:
               <input
                  type='text'
                  value={assignee}
                  onChange={(e) => setAssignee(e.target.value)}
               />
            </label>
            <button onClick={handleSubmit}>Add Todo</button>
            <button onClick={onClose}>Cancel</button>
         </div>
      </div>
   );
};

export default Modal;
