import React from "react";

function NewProductForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Tea Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your product.' />
        <button type='submit'>Describe Here</button>
      </form>
    </React.Fragment>
  );
}

export default NewProductForm;