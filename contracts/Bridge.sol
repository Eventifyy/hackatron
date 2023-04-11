//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Bridge is ERC721URIStorage {
    
    constructor() ERC721("NFT", "test") {}

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    function _mintHere(
        address host,
        address owner,
        string memory _tokenURI
    ) public {
        _tokenId.increment();
        uint256 currentToken = _tokenId.current();
        _mint(host, currentToken);
        _setTokenURI(currentToken, _tokenURI);
        safeTransferFrom(host, owner, currentToken);
    }
}
