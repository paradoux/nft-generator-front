<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">NFT GENERATOR</h3>

  <p align="center">
    Turn the image of your choice into an NFT
    <br />
    <br />
    <!-- <a href="">View Demo</a> -->
    ·
    <a href="https://github.com/paradoux/nft-generator-front/issues">Report Bug</a>
    ·
    <a href="https://github.com/paradoux/nft-generator-front/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  <!-- - [Usage](#usage) -->
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

<img width="800" alt="image" src="https://user-images.githubusercontent.com/27146019/164548929-29bcfedb-4da2-4b4d-aeb3-7cebb1a44351.png">

### Documentation

Very small DApp to to play around with NFTs using a [smart contract](https://github.com/paradoux/nft-generator). You can upload an image that will be stored in the IPFS Pinata and turned it into an NFT.

### Built With

- [React](https://reactjs.org/)
- [ethers](https://github.com/ethers-io/ethers.js)
- [pinata](https://www.pinata.cloud/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Install npm
- Deploy this [smart contract](https://github.com/paradoux/nft-generator) on the testnet of your choice and add the REACT_APP_CONTRACT_ADDRESS environment variable with the deployed address. Don't forget to create the file "../utils/MyEpicNFT.json" with the abi of the deployed smart contract.
- Create a pinata account and add the REACT_APP_PINATA_API_KEY & REACT_APP_PINATA_SECRET_KEY environment variables.

### Installation

1. Clone the repo

```sh
git clone https://github.com/paradoux/nft-generator-front.git
```

2. Install the packages

```sh
npm install
```

3. Start the app

```sh
npm start
```

4. Connect your wallet to this DApp

5. Upload your image

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/paradoux/nft-generator-front/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch using your initials (`git checkout -b am/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin am/amazing-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Axel Martin - mtn.axel@gmail.com

[Github](https://github.com/paradoux) - [LinkedIn](https://www.linkedin.com/in/martinaxel/)
