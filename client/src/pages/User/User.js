import React from "react";
import { Button, Alert, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styles from "./User.module.css";

function User() {
  const formFields = ["Recipient Address", "Serial No", "Warranty Duration"];
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {};

  const validationSchema = Yup.object({
    Password: Yup.string().required("Required"),
    Email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <h2>User</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.InputContainer}>
            {formFields.map((field, index) => {
              return (
                <div key={`FormField${index}`} style={{ margin: "15px" }}>
                  {/* <Form.Label htmlFor="firstName">{field}</Form.Label> */}
                  <TextField
                    id={field}
                    name={field}
                    type="text"
                    label={field}
                    style={{ width: "100%" }}
                    onChange={(event) => {
                      setError(false);
                      formik.handleChange(event);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values[field]}
                    error={formik.touched[field] && formik.errors[field]}
                  />
                  {formik.touched[field] && formik.errors[field] ? (
                    <div style={{ color: "red", textAlign: "left" }}>
                      {formik.errors[field]}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Button type="submit">SUBMIT</Button>
            </div>
          </div>
        </form>
        {error && <Alert variant="danger">Invalid Credentials</Alert>}
      </div>
    </div>
  );
}

export default User;
