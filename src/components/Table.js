import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const Table = ({ todos, onDelete }) => {
   return (
      <table className='main-table'>
         <TableHeader />
         <div className='table-line'></div>
         {todos.map((todo) => (
            <TableRows
               key={todo.rowNumber}
               rowNumber={todo.rowNumber}
               rowDescription={todo.rowDescription}
               rowAssigned={todo.rowAssigned}
               onDelete={onDelete}
            />
         ))}
      </table>
   );
};

export default Table;
