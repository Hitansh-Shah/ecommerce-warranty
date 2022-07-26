import React from "react";
import {
  Button,
  Alert,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import styles from "./Admin.module.css";

function Admin() {
  const formFields = [
    { title: "Recipient Address", type: "text" },
    { title: "Serial No", type: "text" },
    { title: "Warranty Duration (in Days)", type: "text", adornment: "days" },
    { title: "Warranty Conditions", type: "text" },
    { title: "No of Transfers allowed", type: "text" },
    { title: "Use Points", type: "checkbox" },
  ];
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    "Recipient Address": Yup.string()
      .matches("0[xX][0-9a-fA-F]+", {
        excludeEmptyString: true,
        message: "Recipient Address must be a hexadecimal number",
      })
      .required("Required"),
    "Serial No": Yup.number()
      .typeError("Serial Number must be a number")
      .required("Required"),
    "Warranty Duration": Yup.number()
      .typeError("Warranty Duration must be a number")
      .required("Required"),
    "Warranty Conditions": Yup.string()
      .url("Warranty Conditions must be an URL")
      .required("Required"),
    "No of Transfers allowed": Yup.number()
      .typeError("Number of Transfers allowed must be a number")
      .required("Required"),
    "Use Points": Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      "Recipient Address": "",
      "Serial No": "",
      "Warranty Duration (in Days)": "",
      "Warranty Conditions": "",
      "No of Transfers allowed": "",
      "Use Points": false,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <h2>ADMIN</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.InputContainer}>
            {formFields.map((fieldDetails, index) => {
              const field = fieldDetails.title;
              return (
                <div key={`FormField${index}`} style={{ margin: "15px" }}>
                  {fieldDetails.type === "text" && (
                    <div>
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
                  )}
                  {fieldDetails.type === "checkbox" && (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => {
                              formik.values[field] = !formik.values[field];
                            }}
                          />
                        }
                        label={field}
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Button type="submit" variant="contained">
                MINT NFT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
