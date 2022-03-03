import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#2E2E2E",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  messageSent: {
    color: "tan",
    marginTop: "20rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const form = useRef();
  const classes = useStyles();

  const [messageSent, setMessageSent] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'tannersimpkins@gmail.com',
    message: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init("1gwgOSnksMX8sgb-P");
    emailjs.sendForm(
      'service_f27q8va',
      'template_agxbvvk',
      form.current,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    
    setMessageSent(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <Box component="div" className={classes.contactContainer}>
      <Particles />
      <Grid container justify="center">
        {(!messageSent) ? (
          <Box component="form" ref={form} className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              name="from_name"
              variant="outlined"
              value={toSend.from_name}
              onChange={handleChange}
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              name="email"
              variant="outlined"
              value={toSend.email}
              onChange={handleChange}
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              name="message"
              variant="outlined"
              value={toSend.message}
              onChange={handleChange}
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              type='submit'
              onClick={e => {handleSubmit(e)}}
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        ) : (
          <div>
            <h2 className={classes.messageSent} >Message Sent!</h2>
          </div>
        )}
      </Grid>
    </Box>
  );
};

export default Contact;