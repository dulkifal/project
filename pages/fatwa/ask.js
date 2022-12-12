import styles from '../../styles/fatwa.module.css'

const Ask = () => {
  return (
    <div className={styles.askContainer}  >
      <h1>Ask a Question</h1>
      <form  >
        {/* type textarea */}
      
        <label htmlFor="question">السؤال</label>
        <textarea rows={3}    id="question" name="question" />
        <label htmlFor="name">الإسم</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" />
        <button  onClick={(e)=>submitQuestion(e)}>إرسال</button>

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

   
