import React from 'react';
import loading from '../../assets/loading.gif';
import {useParams} from 'react-router-dom';
import {getOneEmail, readEmail} from "../../util/api";
import './Email.css'
import {EmailsContext} from "../App/App";

const Email = () => {

  const {emails, setEmails} = React.useContext(EmailsContext);

  const params = useParams();

  React.useEffect(() => {
    const readEmail = emails.map(em => {
      if (em.id === params.id) {
        em.read = true;
      }
      return em;
    });
    setEmails(readEmail);
  }, [params.id]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [email, setEmail] = React.useState({});

  React.useEffect(() => {
    getOneEmail(params.id)
      .then(response => setEmail(response.data))
      .catch(err => {
        setIsLoading(false);
        setIsError(true);
        console.error(err);
      })
    readEmail(params.id).catch(console.error);
  }, [params]);

  return (
    <div>
      {
        isError ?
          <span>Error Loading Emails...</span> :
          (
            isLoading ?
              <div className="spinner">
                <img src={loading} alt="Loading..."/>
              </div>
              : (
                <EmailDetails email={email}/>
              )
          )
      }
    </div>
  );
};

const EmailDetails = ({email}) => {
  return (
    <>
      <h1>{email.subject}</h1>
      <span>FROM: {email.fromEmail}</span>
      <p>TO: {email.toEmail}</p>
      <div className={"email__body"}>
        <p>
          {email.body}
        </p>
      </div>
    </>
  );
};

export default Email;
