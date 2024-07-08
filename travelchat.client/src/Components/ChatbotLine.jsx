import React, { Fragment, useState, IconContainer } from 'react';

import { AiFillAliwangwang } from "react-icons/ai";

function ChatbotLine  ({ chatbotLine }) {
    const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    if (activeIcon === icon) {
      setActiveIcon(null); // Clicking the active icon again toggles it off
    } else {
      setActiveIcon(icon); // Clicking a different icon sets it as active
    }
      };
  return(    
  <React.Fragment >
    <Fragment>
   <div>{chatbotLine}</div>
    </Fragment>
 

</React.Fragment>
);
};
/*const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const SIconStyled = styled(AiFillAliwangwang)`
  font-size: 24px;
  color: ${props => props.active ? '#00bcd4' : '#ccc'};
  margin-right: 8px;
  cursor: pointer;
`;

const MIconStyled = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.active ? '#f44336' : '#ccc'};
  margin-right: 8px;
  cursor: pointer;
`;
*/
export default ChatbotLine;
