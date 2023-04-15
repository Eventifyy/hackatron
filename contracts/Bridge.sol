//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

/* upon hosting, tickets are whitelisted by admin and then only they can be purchased. 
A whitelisted ticket contains a shareable link */
contract Eventify is ERC1155URIStorage, ERC1155Holder {
    address owner;

    constructor() ERC1155("") {
        owner = payable(msg.sender);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC1155Receiver)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    struct Ticket {
        address host;
        uint supply;
        uint remaining;
        uint price;
        address owner;
        string buyLink;
        bool whitelisted;
        uint256 tokenId;
        string description;
    }

    mapping(uint256 => Ticket) public idToTicket;

    function host(uint _price, uint _supply, string memory _tokenURI, string memory _description) public payable {
        _tokenId.increment();
        uint256 currentToken = _tokenId.current();
        _mint(msg.sender, currentToken, _supply, "");
        _setURI(currentToken, _tokenURI);
        idToTicket[currentToken] = Ticket(msg.sender, _supply, _supply, _price, msg.sender, "", false, currentToken, _description);
        _safeTransferFrom(msg.sender, address(this), currentToken, _supply, "");
    }

    function addBuylink(uint256 _ticketId, string memory _buyLink) public  {
        idToTicket[_ticketId].buyLink = _buyLink;
        idToTicket[_ticketId].whitelisted = true;
    }

    function buyTicket(uint256 _ticketId, address _host) public payable {
        Ticket memory ticket = idToTicket[_ticketId];
        require(msg.value >= ticket.price, "price not payed");
        require(ticket.whitelisted == true, "ticket is not whitelisted");
        require(ticket.remaining > 0);
        _safeTransferFrom(address(this), _host, _ticketId, 1, "");
        ticket.owner = payable(_host);
        ticket.remaining--;

        uint256 fee = ticket.price / 100;
        uint256 remaining = ticket.price - fee;
        payable(ticket.host).transfer(remaining);
        payable(owner).transfer(fee);
    }

    function inventory(address _sender) public view returns (Ticket[] memory) {
        uint256 counter = 0;
        uint256 length;

        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].owner == _sender) {
                length++;
            }
        }

        Ticket[] memory myTickets = new Ticket[](length);
        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].owner == _sender) {
                uint256 currentId = i + 1;
                Ticket storage currentItem = idToTicket[currentId];
                myTickets[counter] = currentItem;
                counter++;
            }
        }
        return myTickets;
    }

    function activeEvents() public view returns (Ticket[] memory) {
        uint256 counter = 0;
        uint256 length;

        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].remaining > 0 && idToTicket[i + 1].whitelisted == true) {
                length++;
            }
        }

        Ticket[] memory unsoldTickets = new Ticket[](length);
        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].remaining > 0 && idToTicket[i + 1].whitelisted == true) {
                uint256 currentId = i + 1;
                Ticket storage currentItem = idToTicket[currentId];
                unsoldTickets[counter] = currentItem;
                counter++;
            }
        }
        return unsoldTickets;
    }
    
    function unverifiedEvents() public view returns (Ticket[] memory) {
        uint256 counter = 0;
        uint256 length;

        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].whitelisted == false) {
                length++;
            }
        }

        Ticket[] memory myTickets = new Ticket[](length);
        for (uint256 i = 0; i < _tokenId.current(); i++) {
            if (idToTicket[i + 1].whitelisted == false) {
                uint256 currentId = i + 1;
                Ticket storage currentItem = idToTicket[currentId];
                myTickets[counter] = currentItem;
                counter++;
            }
        }
        return myTickets;
    }
}