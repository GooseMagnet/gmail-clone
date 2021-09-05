import React from "react";
import './ComposeEmailModal.css'
import {IconButton} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {sendEmail} from "../../util/api";

function ComposeEmailModal({onCloseModal}) {

  const [email, setEmail] = React.useState({
    toEmail: '',
    subject: '',
    body: ''
  });

  const handleChangeForm = (evt) => {
    const {name, value} = evt.target;
    setEmail({...email, [name]: value});
  };

  const handleSendEmail = (evt) => {
    evt.preventDefault();
    if (!email.toEmail || !email.subject || !email.body) return;
    if (email.toEmail === '' || email.subject === '' || email.body === '') return;

    sendEmail({
      toEmail: email.toEmail,
      subject: email.subject,
      body: email.body,
    }).catch(err => console.error(err));

    setEmail({toEmail: '', subject: '', body: ''});
    onCloseModal();
  };

  return (
    <form className={"compose__email__modal"} onSubmit={handleSendEmail}>
      <div className={"compose__email__modal__header"}>
        <h4 className={"compose__email__modal__title"}>New Message</h4>
        <IconButton className={"compose__email__modal__close"} onClick={onCloseModal}>
          <Close/>
        </IconButton>
      </div>
      <div className="compose__email__modal__content">
        <input
          placeholder={"To"}
          name={"toEmail"}
          type="text"
          value={email.toEmail}
          onChange={handleChangeForm}
        />
        <input
          placeholder={"Subject"}
          name={"subject"}
          type="text"
          value={email.subject}
          onChange={handleChangeForm}
        />
        <textarea
          placeholder={"Body"}
          name={"body"}
          className={"compose__email__modal__content__body"}
          value={email.body}
          onChange={handleChangeForm}
        />
      </div>
      <button className={"compose__email__modal__submit"}>Send</button>
    </form>
  );
}

export default ComposeEmailModal;
