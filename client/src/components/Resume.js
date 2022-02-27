import React from 'react';
import { SkillBars } from 'react-skills';
import { makeStyles } from "@material-ui/core/styles";
import Particles from "./Particles";

const skillsData= [
  {
    name: 'ReactJS',
    level: 80,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'AWS',
    level: 65,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'Python',
    level: 70,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'JavaScript',
    level: 85,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'NodeJs',
    level: 70,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'API\'s',
    level: 95,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'Databases',
    level: 85,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'Express',
    level: 85,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'HTML',
    level: 95,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'CSS',
    level: 95,
    color: 'tan',
    duration: 4,
  },
  {
    name: 'Java',
    level: 65,
    color: 'tan',
    duration: 4,
  },
]

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#2E2E2E",
    position: "absolute",
  },
  mainContainer: {
    width: "60%",
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  about: {
    width: "60%",
    margin: "auto",
  },
  aboutTitle: {
    width: "10%",
    margin: "auto",
    marginTop: "2rem",
    color: "tomato",
    marginBottom: "2rem",
  },
  title: {
    width: "10%",
    margin: "auto",
    marginTop: "2rem",
    color: "tomato",
  },
  paragraph: {
    color: "tan",
    outline: "1px tomato solid",
    borderRadius: "2px",
    padding: "1rem",
    boxShadow: "5px 5px 15px 5px #000000",
    fontSize: "1.2rem",
  },
}));

const Resume = () => {
  const classes = useStyles();

  const summary1 = '•	4 years of hands-on experience with full stack development utilizing technologies/languages such as, JavaScript, ReactJs, Sql/Nosql databases, HTML, CSS, Python, NodeJs, Java, etc. Learned through a mixture of college coursework, courses take online through udemy, udacity, etc., personal projects, and a Junior React Developer internship.'
  const summary2 = '•	Knowledge of AWS and its services such as, IAM, S3, EC2, SAM, AWS CLI, RDS, DynamoDB, Cloudwatch, SQS, Api Gateway, Lambda Functions, etc.'
  const summary3 = '•	Excellent written and oral communication skills utilized throughout my remote internship, online classes in college, and professional life as a Department Supervisor at The Home Depot. '

  return (
    <div className={classes.body}>
      <Particles />
      <div className={classes.about}>
        <h2 className={classes.aboutTitle} >About</h2>
        <div className={classes.paragraph} >
          <p>{summary1}</p>
          <p>{summary2}</p>
          <p>{summary3}</p>
        </div>
        <h2 className={classes.title} >Skills</h2>
      </div>
      <div className={classes.mainContainer}>
        <SkillBars skills={skillsData} />
      </div>
    </div>
  )
}

export default Resume;
