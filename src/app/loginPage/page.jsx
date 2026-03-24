"use client";

import { useFormik } from "formik";
import { useEffect } from "react";
import axiosConfig from "../utils/axiosConfig";

import React from "react";

import styles from "./styles.module.css";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      router.push("/study");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.set("username", values.login);
      formData.set("password", values.password);

      try {
        const response = await axiosConfig(1).post(
          "api/users/auth/",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        if ("data" in response) {
          const data = response.data;
          console.log(data.auth_token);
          localStorage.setItem("token", data.auth_token);
        }
      } catch (error) {
        console.error("Ошибка входа:", error);
      }
    },
  });
};

export default Page;