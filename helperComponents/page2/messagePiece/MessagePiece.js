import {useEffect, useState} from "react";
import usePageSelector from "../../../fluxStateManagementSetup/usePageSelector";
import {isPhraseAPalindrome} from "../../../services/page2/page2Services";

const MessagePiece = () => {

  function getMessage() {
    
    const isEmpty = phrase.length <= 0;
    const isAPalindrome = isPhraseAPalindrome(phrase);
    
    if(isEmpty) return 'input something into the input box to see if it is a palindrome';
    else if(isAPalindrome) return `${phrase} input is a palindrome`;
    else return `${phrase} input is NOT, repeat NOT, a palindrome`;
  }


  const phrase = usePageSelector(pageState => pageState?.phrase);

  const [message, setMessage] = useState(getMessage());

  useEffect(() => {

    const newMessage = getMessage();

    setMessage(newMessage)
  }, [phrase])

  return (
      <div>
        {message}
      </div>
  )
}

export default MessagePiece