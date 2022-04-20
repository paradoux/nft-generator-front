import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./style/App.scss";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [etherscanLink, setEtherscanLink] = useState("");
  const [formError, setFormError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    }
  };

  const connectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0]);
  };

  const renderNotConnectedContainer = () => (
    <div className="content">
      <h1 className="page-title">You're not connected to your wallet</h1>
      <button onClick={connectWallet} className="cta">
        Connect to Wallet
      </button>
    </div>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="sub-container result">
          <Result
            currentAccount={currentAccount}
            etherscanLink={etherscanLink}
            isSubmitSuccessful={isSubmitSuccessful}
            formError={formError}
          />
        </div>
        <div className="sub-container factory">
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <Form
              register={register}
              handleSubmit={handleSubmit}
              setEtherscanLink={setEtherscanLink}
              setFormError={setFormError}
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isSubmitSuccessful}
              errors={errors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
