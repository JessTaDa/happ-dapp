const ethers = require('ethers');
import { h, app } from "hyperapp";
import classes from "./main.css";

const state = {
  count: 0,

  wallet: {
    privateKey: null,
    address: null,
  },
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),

  wallet: {
    generateWallet: () => state => {
      const wallet = ethers.Wallet.createRandom();

      return {
        privateKey: wallet.privateKey,
        address: wallet.address,
      };
    },
  },
};

/*
const wholeNewObject = Object.assign({}, {
  prop1: 1,
  prop2: {
    prop3: 3,
  },
}, {
  prop1: 2,
  prop2: {
    prop3: 4,
  },
});
*/

const view = (state, actions) => (
  <div>
    <h1>{state.wallet.address}</h1>
    <h1>{state.wallet.privateKey}</h1>
    <button onclick={() => actions.wallet.generateWallet()}>
      Generate Wallet
    </button>
  </div>
);

app(state, actions, view, document.body);
