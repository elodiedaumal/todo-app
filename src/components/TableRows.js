import { ImCross } from "react-icons/im";

const TableRows = ({ rowNumber, rowDescription, rowAssigned, onDelete }) => {
   return (
      <tbody>
         <tr className='table-rows'>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
            <td>
               <ImCross
                  className='delete-button'
                  onClick={() => onDelete(rowNumber)}
               />
            </td>
         </tr>
      </tbody>
   );
};

export default TableRows;
