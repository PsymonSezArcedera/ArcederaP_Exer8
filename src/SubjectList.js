import React from 'react';

function SubjectList(props){
    let subjects = props.data;
	return (
  	  <div>
        <h1>{props.title}</h1>
        <ol>
            {
            subjects.map((subjects) =>{
                return <li key={subjects.id}>{subjects.code} - {subjects.description} </li>
            })
            }
        </ol>

      </div>
  	)
}

export default SubjectList