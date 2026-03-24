"use client";

import { useFormik } from "formik";
import { useEffect } from "react";
import React from "react";

import styles from "./styles.module.css";

import axiosConfig from "../utils/axiosConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      formData.set("email", values.login);

      try {
        const response = await axiosConfig(1).post(
          "api/users/register/",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        // Обработка ответа
      } catch (error) {
        console.error("Registration error:", error);
      }
    },
  });
};

export default Page;