import React from "react";
import axios from "axios";

import { ethers } from "ethers";
import myEpicNft from "../utils/MyEpicNFT.json";

const Form = ({
  register,
  handleSubmit,
  isSubmitting,
  setEtherscanLink,
  setFormError,
  errors,
}) => {
  const onSubmit = async (data) => {
    try {
      const pinFileUrl = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      const pinJsonUrl = `https://api.pinata.cloud/pinning/pinJSONoIPFS`;
      const fileArray = Array.from(data.image);
      let formData = new FormData();
      formData.append("file", fileArray[0]);
      const pinataFileRsp = await axios.post(pinFileUrl, formData, {
        headers: {
          "Content-Type": `multipart/form-data;`,
          pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
        },
      });

      const metadata = {
        pinataContent: {
          image: pinataFileRsp.data.IpfsHash,
          name: data.name,
          description: data.description,
        },
      };

      const pinataJsonRsp = await axios.post(pinJsonUrl, metadata, {
        headers: {
          pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
        },
      });

      const transaction = await askContractToMintNft(
        `https://ipfs.io/ipfs/${pinataJsonRsp.data.IpfsHash}`
      );

      setEtherscanLink(`https://rinkeby.etherscan.io/tx/${transaction.hash}`);
    } catch (error) {
      setFormError(true);
    }
  };

  const askContractToMintNft = async (tokenURI) => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        myEpicNft.abi,
        signer
      );
      let nftTxn = await connectedContract.makeAnNFT(tokenURI);
      await nftTxn.wait();
      return nftTxn;
    }
  };

  return (
    <div className="content">
      <h1 className="page-title">Upload your image to turn it into an NFT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-name"
          placeholder="Your NFT name"
          name="name"
          {...register("name", { required: "You must specify a name" })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input
          className="input input-description"
          placeholder="Your NFT description"
          name="description"
          {...register("description", {
            required: "You must specify a description",
          })}
        />
        {errors.description && (
          <span className="error">{errors.description.message}</span>
        )}

        <input
          type="file"
          accept="image/*"
          {...register("image", { required: "You must upload an image" })}
        />
        {errors.image && <span className="error">{errors.image.message}</span>}

        {isSubmitting ? (
          <span className="spinner" />
        ) : (
          <input className="cta dark" type="submit" value="Submi(n)t!" />
        )}
      </form>
    </div>
  );
};

export default Form;
