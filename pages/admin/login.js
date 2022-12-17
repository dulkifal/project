import { useState } from "react";
import s from "/styles/admin/login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(name, password).then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        router.push('/admin');
        
      }
      );

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={s.loginPage}>
      <div className={s.loginarea}>
      <p>تسجيل الدخول</p>
      <form onSubmit={handleLogin} className={s.form}>
        <input
          type="text"
          placeholder="الإسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمه السر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value={"تسجيل الدخول"}/>  
      </form>
      {error && <p>{error}</p>}
    </div>
    </div >
  );
}

export default Login;

const login = async (name, password) => {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
  });

  if (res.status === 401) {
    throw new Error('Invalid username or password');
  }
  if(res.status === 500) {
    throw new Error('Server error');
  }
  const data = await res.json();
  console.log(data);
  return data;

}