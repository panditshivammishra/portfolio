import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import event from "../../Assets/Projects/EventSparc.png";
import chat from "../../Assets/Projects/ChatApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="EventSparc"
              description="Event manager application featuring event creation and updating, detailed management, ticket purchasing,full profile management .Utilizes MongoDB , Stripe for payments , Clerk for authentication , and UploadThing for file management of events with a responsive UI using tailwind utility classes"
              ghLink="https://github.com/panditshivammishra/EventSparc"
              demoLink="https://event-sparc.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Advanve Chat and Video Call App"
              description="This chat app prioritizes user experience and real-time communication. make secure video calls using WebRTC. Leverage WebSockets for instant messaging, add and remove user in real time and with presence of online and offline status in real time.

A beautiful, responsive UI adapts to any device. Consider add, remove and leave group chats, file sharing, notifications, search, and robust security features for a truly comprehensive platform."
              ghLink="https://github.com/panditshivammishra/MernChatApp"
             demoLink="https://chattt-appp.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
