import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import cons from "constantes";

import petDog from "../assets/british-royal-family-pets-corgis.jpg";
import petGuineaPig from "../assets/109_a-feature_pocket-pets_mobile.jpg";
import petRabbit from "../assets/638-pets-guide-to-small-and-exotic-pets.jpg";
import petDonkey from "../assets/5a9d08efbab1c.jpg";

export const Home = () => {
  return (
    <main>
      <Container className="contFotos">
        <Row>
          <Col>
            <Row>
              <Col><img className="imagenGrid" alt="perro mascota" src={petDog}/></Col>
              <Col><img className="imagenGrid" alt="conejillo mascota" src={petGuineaPig}/></Col>
            </Row>
            <Row>
              <Col><img className="imagenGrid" alt="conejo mascota" src={petRabbit}/></Col>
              <Col><img className="imagenGrid" alt="burro mascota" src={petDonkey}/></Col>
            </Row>
          </Col>

          <Col>
            <h2>Esta es la página principal.</h2>
            <p>
                Puedes buscar mascotas en adopción aquí.
            </p>
          </Col>
        </Row>
      </Container>

    </main>
  );
}
