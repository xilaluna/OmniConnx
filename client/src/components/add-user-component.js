import React, { Component , useState} from "react";
import UserDataService from "../services/user-service";
import { Modal, Button, Nav, Form } from "react-bootstrap"

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    //this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      username: "",
      submitted: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  saveUser() {
    var data = {
      username: this.state.username,
    };

    UserDataService.create(data)
      .then(response => {
        console.log(response.data.username)
        this.setState({
          id: response.data.id,
          username: response.data.username,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      username: "",

      submitted: false
    });
  }

  render() {
    return (
      // <div className="submit-form">
      //   {this.state.submitted ? (
      //     <div>
      //       <h4>You submitted successfully!</h4>
      //       <button className="btn btn-success" onClick={this.newUser}>
      //         Add
      //       </button>
      //     </div>
      //   ) : (
      //     <div>
      //       <div className="form-group">
      //         <label htmlFor="username">Username</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           id="username"
      //           required
      //           value={this.state.username}
      //           onChange={this.onChangeUsername}
      //           name="username"
      //         />
      //       </div>

      //       <button onClick={this.saveUser} className="btn btn-success">
      //         Submit
      //       </button>
      //     </div>
      //   )}
      // </div>
      <>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" id="username"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                name="username"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
                    const history = useHistory();

          const handleClick = () => {
              history.push("/path/to/push");
          }
            </Form.Group> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.saveUser} className="btn btn-success">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
    </>
    );
  }

}

