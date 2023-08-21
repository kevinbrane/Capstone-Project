import React, { forwardRef } from "react";
import "./Contacts.css";

const Contacts: React.ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <div className="contacts-container" ref={ref}>
      <div>
        <h1 className="contacts-title">Contacts</h1>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <span>+573016666049</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>Kevin_bran@epam.com</span>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <span>Twitter</span>
          <p>https://twitter.com/wordpress</p>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <span>Facebook</span>
          <p>https://www.facebook.com/facebook</p>
        </div>
      </div>
    </div>
  );
};

const ForwardedContacts = forwardRef(Contacts);
export default ForwardedContacts;
