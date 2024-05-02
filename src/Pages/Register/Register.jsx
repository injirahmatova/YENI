import React, { useState } from "react";
import axios from "axios";
import styles from "../../Pages/Register/Register.module.css";
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
const [email, setEmail] = useState("")
  const sendForm = () => {
    axios
      .post("https://northwind.vercel.app/api/categories", {
        name: name,
        surname: surname,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
      });
    setName("");
    setSurname("");
    setEmail ("");
  };

  return (
    <div className={styles.form}>
      <div className={styles.text}>
        <div className={styles.h1}>
          <h1> Contact Us</h1>
        </div>
        <div className={styles.leftRight}>
          <div className={styles.left}>
            <p>
              Full name <span>*</span>
            </p>
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h5>First</h5>
          </div>
          <div className={styles.right}>
            <input
              type="text"
              placeholder=""
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <h5>Last</h5>
          </div>
        </div>

        <div className={styles.email}>
          <p>
            Email <span>*</span>
          </p>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.leave}>
          <p>
            Leave us few words <span>*</span>
          </p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
        </div>
        <div className={styles.btn}>
          <button onClick={sendForm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
