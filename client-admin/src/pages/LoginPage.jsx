import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/ngabolang.png";
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    // dispatch(login(form));
    localStorage.access_token = "testingdong";
    await Swal.fire({
      text: "Login Success",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/");
  }

  return (
    <div className="col-6 mx-auto">
      <div className="bg-ngab text-center mt-5">
        <img src={logo} className="logo-login" />
      </div>
      <h1 className="text-center">Login</h1>
      <div className="card mx-auto">
        <form onSubmit={onSubmit}>
          <div className=" mt-3">
            <label className="form-label">
              Email <sup className="text-danger">*</sup>
            </label>

            <input
              type="email"
              name="email"
              id="email"
              pattern="[^ @]*@[^ @]*"
              className="form-control"
              placeholder="Email address"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label className="form-label">
              Password <sup className="text-danger">*</sup>
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mx-auto mt-5">
            <button type="submit" className="form-control btn btn-ngab">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}