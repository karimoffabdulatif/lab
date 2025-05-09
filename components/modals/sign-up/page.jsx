"use client";
import React, { useState } from "react";
import { Input, Modal } from "antd";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignUp = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const register = async ({ name, email, password }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fake register with:", name, email, password);
        resolve({ status: 201 });
      }, 1000);
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const handleOk = async () => {
    const values = { name, email, password };
    try {
      const response = await register(values);
      if (response && response.status === 201) {
        setOpenSnackbar(true);
        onClose();
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={[
          <button
            key="ok"
            className="custom-ok-button flex justify-start ml-7 px-8 py-2 font-semibold border bg-blue-600 shadow-2xl rounded-lg text-white transition duration-300 hover:bg-blue-500"
            onClick={handleOk}
          >
            Sign Up
          </button>,
        ]}
        style={{
          top: 195,
        }}
      >
        <form
          className="px-[25px] flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleOk();
          }}
        >
          <h1 className="text-[24px] font-medium">Sign Up</h1>
          <p className="w-[270px] text-[12px]">
            Already have an account? Go to login
          </p>
          <Input
            placeholder="Your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3"
          />
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3"
          />
          <Input.Password
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3"
          />
        </form>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Registration was successful!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUp;
