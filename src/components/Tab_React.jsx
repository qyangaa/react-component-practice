import React from "react";
import { Tab, Tabs } from "react-bootstrap";

export default function Tab_React() {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <div className="home">Home tab ...</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div className="profile">Profile....</div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <div className="contact">Contact,,,</div>
        </Tab>
      </Tabs>
    </div>
  );
}
