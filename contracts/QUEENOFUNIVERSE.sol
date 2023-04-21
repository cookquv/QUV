// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract QUEENOFUNIVERSE is ERC20 {
    constructor() ERC20("QUEEN OF UNIVERSE", "QUV") {
        _mint(msg.sender, 2000000000000 * 10 ** decimals());
    }
}