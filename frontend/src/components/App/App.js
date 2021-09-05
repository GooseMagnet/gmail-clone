import "./App.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import EmailSection from "../EmailSection/EmailSection";
import Rightbar from "../Rightbar/Rightbar";
import loading from '../../assets/loading.gif';
import {getAllEmails} from '../../util/api';
import ComposeEmailModal from "../ComposeEmailModal/ComposeEmailModal";

export const EmailsContext = React.createContext([]);

const App = () => {

  const [emails, setEmails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAllEmails().then(r => {
      const emailsWithSelection = r.data.slice(0, 50).map(email => {
        email.isSelected = email.isSelected === true;
        email.read = email.read === true;
        return email;
      });
      setEmails(emailsWithSelection);
      setIsLoading(false);
      setIsError(false);
    }).catch(err => {
      console.error(err);
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  const handleComposeEmail = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <NavBar/>
      <Rightbar/>
      <EmailsContext.Provider value={{emails, setEmails, setIsLoading, setIsError}}>
        <Sidebar onComposeEmail={handleComposeEmail}/>
        {
          isError ?
            <span>Error Loading Emails...</span> :
            (
              isLoading ?
                <div className="spinner">
                  <img src={loading} alt="Loading..."/>
                </div>
                : <EmailSection/>
            )
        }
      </EmailsContext.Provider>
      {showModal && <ComposeEmailModal onCloseModal={handleCloseModal}/>}
    </div>
  );
};

export default App;
