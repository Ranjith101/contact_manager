import React from 'react';
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
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
});

const ContactList = ({ contacts }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Contact List</h2>
      <ul className={classes.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={classes.listItem}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;