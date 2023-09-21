import React, { useState } from "react";
import classes from "./LiveChat.module.css";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.liveChat}>
      <div className={classes.liveChatToggle} onClick={toggleChat}>
        <img
          className={classes.liveChatIcon}
          src="/media/messenger.png"
          alt="Live Chat Support"
        />
      </div>
      {isOpen && (
        <div className={`${classes.liveChatWindow} ${isOpen ? "open" : ""}`}>
          <Card className={classes.cardChat}>
            <CardHeader className={classes.CardHeader}>
              <div>Customer Support</div>
              <button className={classes.chatAppBtn}>Let's Chat App</button>
            </CardHeader>
            <Card.Body>
              <div className={classes.customerChat}>
                <span>Xin chào</span>
                <span>Làm thế nào để xem các sản phẩm</span>
              </div>
              <div className={classes.adminChat}>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <span>ADMIN: chào bạn</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                  <span>
                    ADMIN: Bạn có thể vào mục shop, để xem các sản phẩm
                  </span>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className={classes.cardFooter}>
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Enter Message!"></input>
                <FontAwesomeIcon icon={faPaperclip} />
                <FontAwesomeIcon icon={faFaceSmile} />
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </Card.Footer>
          </Card>
        </div>
      )}
    </div>
  );
}

export default LiveChat;
