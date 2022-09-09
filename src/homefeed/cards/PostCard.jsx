import React, { useState } from "react";
import { Modal } from 'antd';
import "./PostCard.css"

export default function PostCard ({each}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="postCard">
                <div className="topPartOfBox">
                    <img src={each.photoUrl} alt="profile image for each user" />
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
                         {each.projectOverview}
                    </section>
                    
                    <section className="cardSection">
                        <h3> Project Requirements </h3>
                        {each.projectRequirements}
                    </section>

                    <section className="cardSection">
                        <h3> Budget and Timeline </h3>
                        <p> Budget: {each.budget} </p>
                        <p> Ideal Timeline: {each.timeline} </p>
                    </section>
                </div>

                <div className="bidditButtonBox">
                    <button onClick={() => setOpen(true)} className="bidditButton" >Biddit</button>
                </div>

            </div>

            <Modal
                    title="Biddit"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
            </Modal>
        </>
    )
}
