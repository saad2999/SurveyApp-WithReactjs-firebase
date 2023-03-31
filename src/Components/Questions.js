import React from 'react'
import './Questions.css'

export default function Questions(props) {
 
    <input type="text" className="form-control" id="otherinput" placeholder="type here if not listed" />
  
  return (
    <div>
      <div className='container-fluid'>
        <div className='container card mt-2'>
          <form onSubmit={props.submit}>
        <label htmlFor="q1" className="form-label"><b>3.</b>what are you doing now? </label>
          <div>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q1" id='teacher' value='Teaching' />
            <label className="form-check-label" htmlFor="teacher">Teaching</label>
            </span>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q1" id='student' value='student' />
            <label className="form-check-label" htmlFor="student">Student</label>
            </span>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q1" id='programmer' value='Programmer' />
            <label className="form-check-label" htmlFor="programmer">Programmer</label>
            </span>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q1" id='other'value='other'  />
            <label className="form-check-label" htmlFor="other">other</label>
            <input type="text" className="form-control" id="otherinput" name='otherinput' placeholder="type here if not listed" />
            </span>



          </div>
          <label htmlFor="q2" className="form-label"><b>4.</b>Please rate our Course? </label>
          <div>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q2" id='poor' value='Poor' />
            <label className="form-check-label" htmlFor="poor">Poor</label>
            </span>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q2" id='good' value='Good' />
            <label className="form-check-label" htmlFor="good">Good</label>
            </span>
            <span className='spacing'>
            <input className="form-check-input" type="radio" name="q2" id='excellent' value='Excellent' />
            <label className="form-check-label" htmlFor="excellent">Excellent</label>
            </span>
            </div >
              <label htmlFor="q3" className="form-label"><b>5.</b>write a review </label>
             <div className="input-group">
             <textarea className="form-control" aria-label="With textarea" name='q3' ></textarea> <br />
             

              </div>
              <br />
              <div>
              <button type="submit" className="btn btn-primary">Save</button>
              </div>
          
          
          

          </form>
        </div>
        

      </div>
    </div>
  )
}
