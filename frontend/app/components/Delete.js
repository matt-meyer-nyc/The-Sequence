
import React from 'react';

function Delete (props) {

 return (
   <div>
     <form>
       <input
         type='text'
         onChange={props.onChange}
       />
     <button type='button' onClick={props.onSubmit}>Delete</button>
     </form>
   </div>
 )
}

export default Delete;
