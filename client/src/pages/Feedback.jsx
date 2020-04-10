import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";

//import { GlobalContext } from "../context/GlobalContext";

function Feedback() {
  const [ID, setID] = useState("");
  const [Type, setType] = useState("");
  const [Quality, setQuality] = useState("");
  const [Friendliness, setFriendliness] = useState("");
  const [Knowledge, setKnowledge] = useState("");
  const [Comment, setComment] = useState("");
  const [Efficiency, setEfficiency] = useState("");

  //const { addReview } = useContext(GlobalContext);

  const mStyle = {
    background: "#fcfcfc",
    width: "800px",
    margin: "auto",
    marginBottom: "15px",
    color: "black",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newreDetails = {
      id: Math.floor(Math.random() * 100000000),
      ID,
      Type,
      Quality,
      Friendliness,
      Knowledge,
      Comment,
      Efficiency,
    };

    //addReview(newreDetails);
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
              <i className="fas fa-sign-in-alt "></i> Feedback
            </h1>

            <form onSubmit={onSubmit} method="POST">
              <div className="form-group">
                <span className="badge badge-dark m-2">ID</span>
                <br />
                <input
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                  type="text"
                  id="ID"
                  name="ID"
                  className="form-control"
                  placeholder="Enter ID "
                />
              </div>

              {/* <div className="form-group">
            <span  className="badge badge-dark m-2">Type</span>
            <br/>
            <input 
              value={Type}
              onChange={(e) => setType(e.target.value)}
              type="text"
              id="Type"
              name="Type"
              className="form-control"
              placeholder="Enter Type "
            />
          </div> */}
              <p>Type</p>
              <label>
                <input type="radio" value="small" />
                Farmer
              </label>

              <br />

              <label>
                <input type="radio" value="small" />
                Delivery Person
              </label>

              <br />

              <span>
                <input type="radio" value="small" font="20px" />
                Customer
              </span>
              <br />
              {/* <div className="form-group">
            <span className="badge badge-dark m-2">Quality</span>
            <br/>
            <input
              value={Quality}
              onChange={(e) => setQuality(e.target.value)} 
              type="text"
              id="Quality"
              name="Quality"
              className="form-control"
              placeholder="Enter  Quality"
            />
          </div> */}
              <p className="badge badge-dark">Quality</p>
              <span className="m-2">
                <input type="radio" value="small" />1
              </span>

              <span className="m-2">
                <input type="radio" value="small" />2
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />3
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />4
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />5
              </span>

              {/* <div className="form-group">
            <span className="badge badge-dark m-2" >Friendliness</span>
            <br/>
            <input 
              value={Friendliness}
              onChange={(e) => setFriendliness(e.target.value)} 
              type="text"
              id="Friendliness"
              name="Friendliness"
              className="form-control"
              placeholder="Enter Friendliness"
            />
          </div> */}
              <br />
              <p className="badge badge-dark">Friendliness</p>
              <span className="m-2">
                <input type="radio" value="small" font="20px" />1
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />2
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />3
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />4
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />5
              </span>

              {/* <div className="form-group">
            <span className="badge badge-dark m-2">Knowledge</span>
            <br/>
            <input 
              value={Knowledge}
              onChange={(e) => setKnowledge(e.target.value)} 
              type="num"
              id="Knowledge"
              name="Knowledge"
              className="form-control"
              placeholder="Enter Knowledge"
            />
          </div> */}
              <br />
              <p className="badge badge-dark">Knowledge</p>
              <span className="m-2">
                <input type="radio" value="small" font="20px" />1
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />2
              </span>
              <span className="m-2">
                <input type="radio" value="small" font="20px" />3
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />4
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />5
              </span>

              {/* <div className="form-group">
            <span className="badge badge-dark m-2">Efficiency</span>
            <br/>
            <input
              value={Efficiency}
              onChange={(e) => setEfficiency(e.target.value)}  
              type="text"
              id="Efficiency"
              name="Efficiency"
              className="form-control"
              placeholder="Enter Efficiency"
            />
          </div> */}
              <br />
              <p className="badge badge-dark">Efficiency</p>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />1
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />2
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />3
              </span>
              <span className="m-2">
                <input type="radio" value="small" font="20px" />4
              </span>

              <span className="m-2">
                <input type="radio" value="small" font="20px" />5
              </span>

              <div className="form-group">
                <span className="badge badge-dark m-2">Comment</span>
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

              <button
                style={{ width: "50%", margin: "auto" }}
                type="submit"
                className="btn btn-primary btn-block "
              >
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
export default Feedback;