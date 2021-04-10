import React, { useState } from "react";
import { navigate } from "gatsby";
import { useContact } from "../components/useContact";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/contact.css";

const Contact = () => {
  const [values, handleChange] = useContact({
    fname: "",
    lname: "",
    email: "",
  });
  const [missingFname, setMissingFname] = useState("");
  const [missingLname, setMissingLname] = useState("");
  const [missingEmail, setMissingEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formError = checkValidInputs();

    if (!formError) {
      navigate("/form-submitted/");
    }
  }

  function checkValidInputs() {
    let missing = false;

    if (values.fname === "") {
      setMissingFname("Missing First Name");
      missing = true;
    } else {
      setMissingFname("");
    }
    if (values.lname === "") {
      setMissingLname("Missing Last Name");
      missing = true;
    } else {
      setMissingLname("");
    }
    if (values.email === "") {
      setMissingEmail("Missing Email Address");
      setIncorrectEmail('Missing "@" and "." in Email Address');
      missing = true;
    } else {
      setMissingEmail("");

      if (
        values.email.indexOf("@") === -1 &&
        values.email.indexOf(".") === -1
      ) {
        setIncorrectEmail('Missing "@" and "." in Email Address');
        missing = true;
      } else if (values.email.indexOf("@") === -1) {
        setIncorrectEmail('Missing "@" in Email Address');
        missing = true;
      } else if (values.email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "." in Email Address');
        missing = true;
      }
    }

    return missing;
  }

  return (
    <main className='contact'>
      <Head title='Contact' description='contact me' kewords='contact' />
      <Header />
      <section className='content'>
        <form>
          <input name='fname' value={values.fname} onChange={handleChange} />
          <input name='lname' value={values.lname} onChange={handleChange} />
          <input name='email' value={values.email} onChange={handleChange} />
          <button onClick={handleSubmit} className='submit'>
            Next
          </button>
        </form>
        <Social />
      </section>
    </main>
  );
};

export default Contact;
