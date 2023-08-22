import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Contacts.scss";

const Contacts: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className="contacts-container" ref={ref}>
      <div>
        <h1 className="contacts-title">Contacts</h1>
      </div>
      <div className="contacts-info">
        <div>
          <div>
            <img
              src="../src/assets/Contacts/clarity_phone-handset-solid.png"
              alt=""
            />
          </div>
          <div>
            <a className="contact-link" href="tel:+573016666049">
              +573016666049
            </a>
          </div>
        </div>
        <div>
          <div>
            <img src="../src/assets/Contacts/email.png" alt="" />
          </div>
          <div>
            <a className="contact-link" href="mailto:Kevin_bran@epam.com">
              Kevin_bran@epam.com
            </a>
          </div>
        </div>
        <div>
          <div>
            <img
              src="../src/assets/Contacts/akar-icons_twitter-fill.png"
              alt=""
            />
          </div>
          <div>
            <span>Twitter</span>
            <Link className="link" to="">
              https://twitter.com/wordpress
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img
              className="fb"
              src="../src/assets/Contacts/Vector.png"
              alt=""
            />
          </div>
          <div>
            <span>Facebook</span>
            <Link className="link" to="">
              https://www.facebook.com/facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForwardedContacts = forwardRef(Contacts);
export default ForwardedContacts;
