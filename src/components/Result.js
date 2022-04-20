import React from "react";

const Result = ({
  currentAccount,
  etherscanLink,
  isSubmitSuccessful,
  formError,
}) => {
  return (
    <div className="content">
      {currentAccount && (
        <h1 className="page-title white">
          And check it out freshly minted on OpenSea
        </h1>
      )}
      {formError && (
        <div className="content">
          <h1 className="page-title white">Error submitting your NFT</h1>
          <h2 className="page-title white">Please try again</h2>
        </div>
      )}

      {isSubmitSuccessful && (
        <div className="links">
          <button className="cta bright">
            <a
              className="link transaction"
              href={etherscanLink}
              target="_blank"
              rel="noreferrer"
            >
              Your transaction
            </a>
          </button>
          <button className="cta bright">
            <a
              className="link opensea"
              href={`https://testnets.opensea.io/${currentAccount}`}
              target="_blank"
              rel="noreferrer"
            >
              Your NFT in Open Sea
            </a>
          </button>
        </div>
      )}
    </div>
  );
};
export default Result;
