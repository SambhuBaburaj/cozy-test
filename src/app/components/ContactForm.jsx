"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  ForwardToInboxOutlined,
  PhoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters")
      .required("Message is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxuud5AHZesQmnW-D9JpTUe7yeJb6qBxsfrlUHm_QA081QEgPbRI0Z2bIik6bLvblmB/exec",
        values,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      alert("Form submitted successfully");
      resetForm();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <p className="section-title text-4xl font-semibold mt-28 text-center pb-[30px]">
        CONTACT US
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-16 p-5 gap-40">
        <div>
          <p className="text-3xl font-semibold">CozyFox</p>
          <p className=" pt-4">
            Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis
            eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
            leo. Amet volutpat consequat mauris nunc congue.
          </p>
          <div className="flex justify-between mt-5">
            <Link href={"https://www.facebook.com/cozyfolks.inn"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#82D5F7"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href={"https://www.instagram.com/cozyfolks.in/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#82D5F7"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M15,4c-6.06341,0 -11,4.93659 -11,11v18c0,6.06341 4.93659,11 11,11h18c6.06341,0 11,-4.93659 11,-11v-18c0,-6.06341 -4.93659,-11 -11,-11zM15,6h18c4.98259,0 9,4.01741 9,9v18c0,4.98259 -4.01741,9 -9,9h-18c-4.98259,0 -9,-4.01741 -9,-9v-18c0,-4.98259 4.01741,-9 9,-9zM35,11c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.51133,0 -10,4.48867 -10,10c0,5.51133 4.48867,10 10,10c5.51133,0 10,-4.48867 10,-10c0,-5.51133 -4.48867,-10 -10,-10zM24,16c4.43067,0 8,3.56933 8,8c0,4.43067 -3.56933,8 -8,8c-4.43067,0 -8,-3.56933 -8,-8c0,-4.43067 3.56933,-8 8,-8z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href={"https://twitter.com/Cozy_Folks"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#82D5F7"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href={"https://www.linkedin.com/company/cozyfolks/about/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#82D5F7"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-14">
        <div className="flex">
              <p>
                <PlaceOutlined className="text-[#82D5F7]" />
              </p>
              <p className="ml-5 text-xl font-thin">
                A108 Adam Street
                <br />
                New York, NY 535022
              </p>
            </div>
            <div className="flex my-10">
              <p>
                <ForwardToInboxOutlined className="text-[#82D5F7]" />
              </p>
              <p className="ml-5 text-xl font-thin">cozyfolks.in@gmail.com</p>
            </div>
            <div className="flex">
              <p>
                <PhoneOutlined className="text-[#82D5F7]" />
              </p>
              <p className="ml-5 text-xl font-thin">+91 884 876 3423</p>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
          InputLabelProps={{
            style: {
              color: "white", // Set the label color
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Set the outline color
              },
              "&:hover fieldset": {
                borderColor: "white", // Set the outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Set the outline color on focus
              },
            },
          }}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Your E-mail"
          variant="outlined"
          margin="normal"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
          InputLabelProps={{
            style: {
              color: "white", // Set the label color
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Set the outline color
              },
              "&:hover fieldset": {
                borderColor: "white", // Set the outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Set the outline color on focus
              },
            },
          }}
        />

        <TextField
          fullWidth
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          margin="normal"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          required
          InputLabelProps={{
            style: {
              color: "white", // Set the label color
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Set the outline color
              },
              "&:hover fieldset": {
                borderColor: "white", // Set the outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Set the outline color on focus
              },
            },
          }}
        />

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={5}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          required
          InputLabelProps={{
            style: {
              color: "white", // Set the label color
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Set the outline color
              },
              "&:hover fieldset": {
                borderColor: "white", // Set the outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Set the outline color on focus
              },
            },
          }}
        />

        <Button
          type="submit"
          variant="outlined"
          color="primary"
          fullWidth
          className="mt-3"
        >
          Submit
        </Button>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
