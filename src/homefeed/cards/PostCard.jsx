import React, { useState } from "react"
import BidditModal from "./BidditModal";
// import { Modal } from 'antd';


// import { Modal } from "react-responsive-modal"
import "./PostCard.css"


export default function PostCard({ each }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="postCard">
        <div className="topPartOfBox">
          <img className="cardImage"
            src={
              each.photoUrl ||
              "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
            }
            alt="profile image for each user"
          />
          <div className="nameAndCounty">
            <h2>{each.userFullName} </h2>
            <p>{each.userCounty}</p>
          </div>

          <div className="services">
            <p> Seeking a {each.servicesSeeking}</p>
          </div>
        </div>

        <div className="projectDetailsBox">
          <section className="cardSection">
            <h3> Project Overview </h3>
            {each.projectOverview || each.overview}
          </section>

          <section className="cardSection">
            <h3> Project Requirements </h3>
            {each.projectRequirements}
          </section>

          <section className="cardSection">
            <h3> Budget and Timeline </h3>
            <p> Budget: {each.budget || each.projectBudget} </p>
            <p> Ideal Timeline: {each.timeline || each.projectTimeline} </p>
          </section>
        </div>

        <div className="bidditButtonBox">
          {/* <button onClick={handleShow} className="bidditButton">
            Biddit
          </button> */}
          <BidditModal />
        </div>
      </div>
        



    </>
  )
}
