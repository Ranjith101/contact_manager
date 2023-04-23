import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
});

const ContactForm = ({ addContact }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Add Contact</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.label}>
          Name:
          <input className={classes.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className={classes.label}>
          Phone:
          <input className={classes.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button className={classes.button} type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;