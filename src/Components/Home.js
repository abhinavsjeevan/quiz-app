import React, { useState } from 'react';
import quizData from './Data';


function Home() {
    const[questions,setQuestion] = useState(quizData)
  return (
    <main>
<div className="container">
    <h2>Quiz App</h2>
    <section className='info'>
    {
            questions.map((question)=>{
                console.log(questions);
                return(
                    <Question key={question.id}{...question}/>
                )
        })
    }
    
        </section>
</div>
    </main>
  
  )
}

export default Home
