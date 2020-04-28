import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
// import './s.css'

import { UserContext } from "./context/UserContext";

function Review() {
  const { addReview } = useContext(UserContext);
  const [ID, setID] = useState("");
  const [reviewee, setReviewee] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [Type, setType] = useState("");
  const [farmer, setFarmer] = useState(false);

  const [delivery, setDelivery] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [Quality, setQuality] = useState(0);
  const [Friendliness, setFriendliness] = useState(0);
  const [Knowledge, setKnowledge] = useState(0);
  const [Comment, setComment] = useState(0);
  const [Efficiency, setEfficiency] = useState(0);

  const mStyle = {
    background: "black",
    width: "800px",
    height: "800px",
    color: "white",
    margin: "auto",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newreDetails = {
      //id: Math.floor(Math.random() * 100000000),
      reviewer,
      reviewee,
      quality: Quality,
      friendliness: Friendliness,
      knowlodge: Knowledge,
      comment: Comment,
      efficiency: Efficiency,
    };

    addReview(newreDetails);
    console.log("ID:", ID);
    console.log("Type:", Type);
    console.log("Quality:", Quality);
    console.log("Friendliness:", Friendliness);
    console.log("Knowledge:", Knowledge);
    console.log("Comment:", Comment);
    console.log("Efficiency:", Efficiency);
  };

  return (
    <div>
      <div className="row-md-100 mt-5">
        <div className="col-md-1000">
          <div className="card card-body" style={mStyle}>
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt "></i> Review
            </h1>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <span className="badge badge-warning m-2">Reviewee Type</span>
                <br />
                <input
                  value={reviewee}
                  onChange={(e) => setReviewee(e.target.value)}
                  type="text"
                  id="Reviewee"
                  name="Reviewee"
                  className="form-control"
                  placeholder="F for Farmer; D for Delivery-Person; C for Customer"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Reviewer Type</span>
                <br />
                <input
                  value={reviewer}
                  onChange={(e) => setReviewer(e.target.value)}
                  type="text"
                  id="Reviewer"
                  name="Reviewer"
                  className="form-control"
                  placeholder="F for Farmer; D for Delivery-Person; C for Customer"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Quality</span>
                <br />
                <input
                  value={Quality}
                  onChange={(e) => setQuality(e.target.value)}
                  type="number"
                  id="Quality"
                  name="Quality"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Friendliness</span>
                <br />
                <input
                  value={Friendliness}
                  onChange={(e) => setFriendliness(e.target.value)}
                  type="number"
                  id="Friendliness"
                  name="Friendliness"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Knowledge</span>
                <br />
                <input
                  value={Knowledge}
                  onChange={(e) => setKnowledge(e.target.value)}
                  type="number"
                  id="Knowledge"
                  name="Knowledge"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <span className="badge badge-warning m-2">Efficiency</span>
                <br />
                <input
                  value={Efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                  type="number"
                  id="Efficiency"
                  name="Efficiency"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <span className="badge badge-warning m-2">Comment</span>
                <br />
                <input
                  value={Comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  id="Comment"
                  name="Comment"
                  className="form-control"
                  placeholder="Enter Comment"
                />
              </div>

              <button type="submit" className="btn btn-warning btn-block ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*  </div>
  // </div>*/}
    </div>
  );
}
export default Review;
