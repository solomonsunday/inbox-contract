pragma solidity ^0.4.17;

// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    string public message; // this is the state variable that we are going to use for our application

    function Inbox(string InitialMessage) public {
        message = InitialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
