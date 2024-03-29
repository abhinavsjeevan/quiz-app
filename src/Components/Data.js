
const quizData = [
  {
    id: 1,
    title: ' What is the capital of Australia?',
    info:
      'Canberra : Canberra became the capital of Australia in 1908, chosen as a compromise between Sydney and Melbourne, which both wanted to be the capital.',
  },
  {
    id: 2,
    title: 'Who wrote the play "Romeo and Juliet"?',
    info:
      ' William Shakespeare :  "Romeo and Juliet" is one of William Shakespeares most famous plays, written in the early stages of his career, likely between 1591 and 1595.',
  },
  {
    id: 3,
    title: 'Who invented ChatGpt?',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    title: 'What is the largest planet in our solar system?',
    info:
      'Jupiter : Jupiter is the largest planet in our solar system, with a diameter of about 86,881 miles (139,822 kilometers). It is a gas giant and has a strong magnetic field.',
  },
  {
    id: 5,
    title: 'When was React invented?',
    info:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
]
export default quizData

M No, [20-12-2023 11:31 AM]
.question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-special);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--clr-red-special);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }