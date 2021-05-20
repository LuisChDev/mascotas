import { useState, useEffect } from "react";
import { useFormik } from "formik";

export const Login = ({ loggedin, login }) => {
  const formik = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        login(loggedin ? false : true);
      },
    });

  return (
    <div>
      <h2>Tu nuevo compañero está más cerca de lo que crees.</h2>
      <p>
        Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non
        orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
        lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam
        tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede.
        Etiam vel neque nec dui dignissim bibendum. Vivamus id enim. Phasellus
        neque orci, porta a, aliquet quis, semper a, massa. Phasellus purus.
        Pellentesque tristique imperdiet tortor. Nam euismod tellus id erat.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Correo Electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">{loggedin ? "Cerrar sesión" : "Ingresar"}</button>
      </form>
    </div>
  );
};
