import Table from "./components/Table";
import React, { useState } from "react";
import Modal from "./components/TodoModal";

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedTodo, setSelectedTodo] = useState(null);
   const [todos, setTodos] = useState([
      {
         rowNumber: 1,
         rowDescription: "Water Plants",
         rowAssigned: "Elodie",
      },
      {
         rowNumber: 2,
         rowDescription: "Clean Kitchen",
         rowAssigned: "Elisa",
      },
      {
         rowNumber: 3,
         rowDescription: "Clean Bathroom",
         rowAssigned: "Elodie",
      },
   ]);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   const addTodo = ({ description, assignee }) => {
      // Add or update the todo based on whether a todo is selected
      const updatedTodos = selectedTodo
         ? todos.map((todo) =>
              todo.rowNumber === selectedTodo.rowNumber
                 ? {
                      ...todo,
                      rowDescription: description,
                      rowAssigned: assignee,
                   }
                 : todo
           )
         : [
              ...todos,
              {
                 rowNumber: todos.length + 1,
                 rowDescription: description,
                 rowAssigned: assignee,
              },
           ];

      setTodos(updatedTodos);
      setSelectedTodo(null);
      closeModal();
   };

   const deleteTodo = (rowNumber) => {
      const updatedTodos = todos.filter((todo) => todo.rowNumber !== rowNumber);
      setTodos(updatedTodos);
   };

   return (
      <div className='section'>
         <div>
            <p className='header-text'>Your Todo's</p>
            <div className='table'>
               <Table todos={todos} onDelete={deleteTodo} />
               <button className='button' onClick={openModal}>
                  Add New Todo
               </button>
               <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  onSubmit={addTodo}
               />
            </div>
         </div>
      </div>
   );
}

export default App;
