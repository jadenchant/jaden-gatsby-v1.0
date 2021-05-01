import React, { useState } from "react";
import { navigate } from "gatsby";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/contact.css";

// ALso add Google Authentication
const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [isError, setIsError] = useState(false);
  const [missingFname, setMissingFname] = useState("");
  const [missingLname, setMissingLname] = useState("");
  const [missingEmail, setMissingEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState("");

  const handleChange = (event: { target: any }) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "fname") {
      setFname(value);
    } else if (name === "lname") {
      setLname(value);
    } else {
      setEmail(value);
    }
  };

  function handleSubmit(event): void {
    event.preventDefault();
    const formError = checkValidInputs();

    if (!formError) {
      navigate("/contact/success/");
    }
  }

  function checkValidInputs(): boolean {
    let missing = false;

    if (fname === "") {
      setMissingFname("Missing First Name");
      missing = true;
    } else {
      setMissingFname("");
    }
    if (lname === "") {
      setMissingLname("Missing Last Name");
      missing = true;
    } else {
      setMissingLname("");
    }
    if (email === "") {
      setMissingEmail("Missing Email Address");
      setIncorrectEmail('Missing "@" and "." in Email Address');
      missing = true;
    } else {
      setMissingEmail("");

      if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "@" and "." in Email Address');
        missing = true;
      } else if (email.indexOf("@") === -1) {
        setIncorrectEmail('Missing "@" in Email Address');
        missing = true;
      } else if (email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "." in Email Address');
        missing = true;
      }
    }

    setIsError(missing);
    return missing;
  }

  return (
    <main className='contact'>
      <Head title='Contact' description='contact me' kewords='contact' />
      <Header />
      <section className='content'>
        <form>
          <label className='form-item'>
            <p className='form-item-name'>
              First Name <span className='required'>*</span>
            </p>
            <input
              name='fname'
              type='string'
              value={fname}
              onChange={handleChange}
              className='form-item-input'
            />
          </label>
          <label className='form-item'>
            <p className='form-item-name'>
              Last Name <span className='required'>*</span>
            </p>
            <input
              name='lname'
              type='string'
              value={lname}
              onChange={handleChange}
              className='form-item-input'
            />
          </label>
          <label className='form-item'>
            <p className='form-item-name'>
              Email: <span className='required'>*</span>
            </p>
            <input
              name='email'
              type='string'
              value={email}
              onChange={handleChange}
              className='form-item-input'
            />
          </label>
          <button onClick={handleSubmit} className='form-submit'>
            Next
          </button>
        </form>

        <div className={isError ? "input-error" : "input-error-none"}>
          <ul>
            <li>{missingFname}</li>
            <li>{missingLname}</li>
            <li>{missingEmail}</li>
            <li>{incorrectEmail}</li>
          </ul>
        </div>

        <Social />
      </section>
    </main>
  );
};

export default Contact;
