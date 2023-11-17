import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom"; 
import { Checkbox } from "@mui/material";
import "../styles.css";


function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // redirect
  const navigate = useNavigate();

  //  real-time validation
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    // error updates
    let tempErrors = { ...errors };
    if (value.trim() === "") {
      tempErrors[name] = `${name[0].toUpperCase() + name.slice(1)} is required`;
    } else {
      tempErrors[name] = "";
    }

    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      tempErrors[name] = "Email is not valid";
    }

    if (name === "password" && value && value.length < 6) {
      tempErrors[name] = "Password must be at least 6 characters long";
    }

    setErrors(tempErrors);
  };

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Jump and pass state
      navigate("/success", { state: { details: form } });
    } else {
      setSubmissionError("Please correct the errors before submitting.");
    }
  };

  // Form validation
  const validateForm = () => {
    let tempErrors = {};
    if (!form.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!form.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!form.username.trim()) tempErrors.username = "Username is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Email is not valid";
    if (!form.password || form.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Make sure that the form is submitted and that there are no errors
  const isFormInvalid = () => {
    return (
      !Object.values(form).every(Boolean) || Object.values(errors).some(Boolean)
    );
  };

  //message displayed after the form is submitted
  const renderSuccessMessage = () => {
    return (
      <div>
        <h2>Your Nosres Account has been successfully created.</h2>
        <p>We've sent you a link at {form.email} to verify your account.</p>
        <p>
          Please <a href="https://accounts.nosres.com/login">click here</a> to
          login.
        </p>
      </div>
    );
  };

  if (isSubmitted) {
    return renderSuccessMessage();
  }

  return (
     
    <div
      className="form"
    
    >
      <h3>Create your Nosres Account</h3>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
       
        <InputField
          id="first-name"
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleInputChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          autoComplete="given-name"
        />
        <InputField
          id="last-name"
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleInputChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          autoComplete="family-name"
        />
        <InputField
          id="username"
          label="Username"
          name="username"
          value={form.username}
          onChange={handleInputChange}
          error={!!errors.username}
          helperText={errors.username}
          autoComplete="username"
        />
        <InputField
          id="email"
          label="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          type="email"
          autoComplete="email"
        />
        <InputField
          id="password"
          label="Password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          error={!!errors.password}
          helperText={errors.password}
          type="password"
          autoComplete="new-password"
        />
       

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "16px", textTransform: "none" }}
          disabled={isFormInvalid()}
        >
          Create Account
        </Button>
        {submissionError && (
          <div style={{ color: "red" }}>{submissionError}</div>
        )}
      </form>
    </div>
    
  );
}

export default SignUpForm;
