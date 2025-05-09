"use client";
import React, { useState } from "react";
import { Input, Modal } from "antd";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignIn = ({ isOpen, onClose, openSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const login = async ({ email, password }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fake login with:", email, password);
        resolve({ status: 200 });
      }, 1000);
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const handleOk = async () => {
    const values = { email, password };
    try {
      const response = await login(values);
      if (response && response.status === 200) {
        setOpenSnackbar(true);
        onClose();
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleForgotPasswordClick = () => {
    onClose();         // SignIn modalni yopish
    openSignUp();      // SignUp modalni ochish
  };

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={[
          <button
            key="ok"
            className="custom-ok-button flex justify-start ml-7 px-14 py-2 font-semibold border bg-blue-600 shadow-2xl rounded-lg text-white transition duration-300 hover:bg-blue-500"
            onClick={handleOk}
          >
            Sign In
          </button>,
        ]}
        style={{ top: 195 }}
      >
        <form
          className="px-[25px] flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleOk();
          }}
        >
          <h1 className="text-[24px] font-medium">Sign In</h1>
          <p className="w-[270px] text-[12px]">
            If you are not registered, click the button
          </p>
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

          {/* Forgot password link */}
          <button
            type="button"
            onClick={handleForgotPasswordClick}
            className="text-blue-500 hover:underline text-sm text-left mt-1"
          >
            Forgot your password?
          </button>
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
          Login successful!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignIn;
