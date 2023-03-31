import React from "react";

function Details(props) {
  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={props.submit}>
        <div className="container card mt-2">
        <div className="mb-3"> 
        <label htmlFor="name" className="form-label"><b>1.</b>Name </label>
        <input type="text" className="form-control" name="name" placeholder="Name"/>
        
        <label htmlFor="email" className="form-label"><b>2.</b>Email </label>
        <input type="email" className="form-control" name="email" placeholder="name@example.com"/> <br />

        <button type="submit" className="btn btn-primary">Next</button>
        
        </div>
        </div>
        </form>
      </div>
      
    </div>
  );
}

export default Details;
