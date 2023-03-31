import React, { Component } from 'react';

import Details from './Details';

import Questions from './Questions';
import Greet  from './Greet';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';

import 'firebase/compat/database';



import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWo9imCACI43D7UBKXRgumxUkbxbjCKpQ",
    authDomain: "web-survey-bf08c.firebaseapp.com",
    databaseURL: "https://web-survey-bf08c-default-rtdb.firebaseio.com",
    projectId: "web-survey-bf08c",
    storageBucket: "web-survey-bf08c.appspot.com",
    messagingSenderId: "910190316917",
    appId: "1:910190316917:web:d24088d35e28c4ca5e173c"
  };
  
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
    
  }
  

  


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            isSubmitted: false,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null,
            }
            

        };
    }
    DetailsSubmitHandler=(event)=>{
        event.preventDefault();
       let name= event.target.name.value;
        let email= event.target.email.value;
       
            

        this.setState({name, email});
        
        
    }
    QuestionSubmitHandler=(event)=>{
        event.preventDefault();
        const questions = { };
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
      
        questions.other = event.target.otherinput.value;
        const isSubmitted = true;
        this.setState({questions,isSubmitted}, ()=>{
            console.log(this.state);
            const db = firebase.database();
            db.ref('users/' + this.state.id).set({
            name: this.state.name,
            email: this.state.email,
            questions: this.state.questions,
            
        });
        
        });
        

    }

    render() {
        return (
            <>
            
            <div className='container-fluid'>
                <div>
                <div className='container card mt-2'>
                    <h1 className='text-center text-primary'>My survey app</h1>
                    
                </div>
                </div>
                

            </div>
           
            {this.state.isSubmitted? <Greet/>  :this.state.name===null&&this.state.email===null? <Details submit={this.DetailsSubmitHandler}/> :<Questions  submit={this.QuestionSubmitHandler}/> }

                
            </>
        );
    }
}

export default Container;