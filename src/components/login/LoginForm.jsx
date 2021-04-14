import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import renderCheckBoxField from "../common/CheckBox";
import { Form } from "react-bootstrap";
const LogInForm = ({ handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__form-group">
        <span className="form__form-group-label">DNI</span>
        <div className="form__form-group-field">
          <Form.Control type="text" name="name" placeholder="Ingresa tu DNI" />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Contrasena</span>
        <div className="form__form-group-field">
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onClick={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          ></Form.Control>
        </div>
        <div className="account__forgot-password">
          <a href="/">Forgot a password?</a>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group-field">
          <input
            name="remember_me"
            component={renderCheckBoxField}
            label="Remember me"
          />
        </div>
      </div>
      <Link
        className="btn btn-primary account__btn account__btn--small"
        to="/pages/one"
      >
        Sign In
      </Link>
      <Link
        className="btn btn-outline-primary account__btn account__btn--small"
        to="/log_in"
      >
        Create Account
      </Link>
    </form>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LogInForm;

/* export default reduxForm({
  form: "log_in_form",
})(LogInForm); */
