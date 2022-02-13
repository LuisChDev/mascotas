import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router";

import cons from "constantes";
import "./style.css";

export const Login = ({ loggedin, login }: {
  loggedin: boolean,
  login: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [err, setErr] = useState("");
  const history = useHistory();
  const formik = useFormik(
    {
      initialValues: {
        formEmail: "",
        formPassword: "",
      },

      // (Email: "sean.maxwell@gmail.com", Password: "Password@1")
      onSubmit: (values) => {
        const logUser = async () => {
          try {
            const resp = await fetch(`${cons.api}/api/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: values.formEmail,
                password: values.formPassword,
              })
            });

            const datos = await resp.json();
            console.log(datos);
            if (Object.keys(datos).includes("key")) {
              setErr("");
              localStorage.setItem("key", datos.key)
              login(true);
              history.push("/");

            } else if (Object.keys(datos).includes("error")) {
              setErr("Usuario o contraseña incorrectos.")
            }

          } catch(e) {
            setErr("Ha habido un error con la solicitud. Intente de nuevo.");
          }
        };

        if (loggedin) {
          localStorage.removeItem("key");
          login(false);
        } else {
          logUser();
        }
      },
    });

  return (
    <div className="loginCont">
        <div className="loginContText">
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
        </div>
        <div className="card login-card col-12 col-lg-6 bg-secondary">

            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="login-block" controlId="formEmail">
                    <Form.Label className="text-white" >Correo Electrónico:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="tu correo aquí"
                      onChange={formik.handleChange}
                      value={formik.values.formEmail}
                    />
                    <Form.Text className="text-white">
                        no compartimos con nadie tu correo electrónico.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="login-block" controlId="formPassword">
                    <Form.Label className="text-white">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="tu contraseña"
                      onChange={formik.handleChange}
                      value={formik.values.formPassword}
                    />
                </Form.Group>

                <Button className="login-block" variant="primary" type="submit">
                    {loggedin ? "Cerrar sesión" : "Ingresar"}
                </Button>

                {err ?
                 <Alert variant="danger">
                     {err}
                 </Alert>
                : ""}

            </Form>

        </div>
    </div>
  );
};
