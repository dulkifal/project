import styles from '../../styles/fatwa.module.css'

const Ask = () => {
  return (
    <div className={styles.askContainer}  >
      <p>Ask a Question</p>
      <form  >
       
        <textarea type="textarea" id="question"  placeholder=" سؤال"  />
        <input type="text" id="name" placeholder="اسم" />
        <input type="email" id="email" placeholder="البريد الإلكتروني" />
        <button onClick={submitQuestion}>ارسال</button>

      </form>
    </div>
  );
}
export default Ask;

function submitQuestion(e) {
  e.preventDefault();

  fetch('/api/fatwa/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: document.getElementById('question').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

   
