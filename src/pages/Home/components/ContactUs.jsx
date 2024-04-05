import { Component } from "react";

class ContactUs extends Component {
  render() {
    const heightStyle={
        height : '150px',
    }
    return (

      <>
        <div className="container mt-5">
          <h2>
            <b>Kontak Kami</b>
          </h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Well never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            Comments
            <div className="form-floating ">
            
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={heightStyle}
        
              ></textarea>
              <label htmlFor="floatingTextarea2">Leave a Comment in here</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactUs;
