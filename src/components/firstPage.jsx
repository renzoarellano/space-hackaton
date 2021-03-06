import React from "react";
import { auth, facebookProvider, googleProvider } from "../lib/authFirebase";
import { userContext } from "../context/Provider";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  const { setUserData } = React.useContext(userContext);
  const history = useHistory();
  const nextStep = () => history.push("paso-2");
  const facebookLogin = () => {
    try {
      auth()
        .signInWithPopup(facebookProvider)
        .then(({ user }) => {
          console.log("Facebook LogIN", user.providerData[0]);
          setUserData(user.providerData[0]);
          nextStep();
        });
    } catch (error) {
      console.error(error);
    }
  };
  const googleLogin = () => {
    try {
      auth()
        .signInWithPopup(googleProvider)
        .then(({ user }) => {
          console.log("Google LogIN", user.providerData[0]);
          setUserData(user.providerData[0]);
          nextStep();
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container">
          <div className="text-center mt-5 mb-5">
            <h3>¡Tenemos lo que buscas!</h3>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-6 text-center">
              <h4>
                Registrate con algunas de las opciones y encuentra el producto
                que necesitas
              </h4>{" "}
              <br />
              <p>
                Cuenta con nosotros para consultar tus saldos, hacer tus pagos,
                controlar tus gastos y mucho mas, dsde donde estes de manera
                gratuita.
              </p>
              <button
                type="button"
                className="btn btn-primary mt-2 px-4 py-2"
                onClick={() => googleLogin()}
              >
                <div className="btn-google">
                  <img
                    src="https://images.rappi.com/cms-web/images/google-icon_edb80ffa74.png"
                    alt=""
                  />
                </div>
                Inicia sesión con Google
              </button>
              <br />
              <button
                type="button"
                className="btn btn-primary mt-2 px-4 py-2 btn-facebook"
                onClick={() => facebookLogin()}
              >
                <img
                  width="20"
                  style={{ marginTop: "-3px" }}
                  src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"
                  alt=""
                />
                Inicia sesión con Facebook
              </button>
              <br />
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://www.bbva.pe/content/dam/public-web/peru/ab-test/PRESTAMO.svg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        ¿Necesitas dinero en efectivo?
                      </h5>
                      <p className="card-text">
                        Haz realidad ese sueño, Pide un Préstamo Personal
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          * Ver términos y condiciones
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://www.bbva.pe/content/dam/public-web/global/images/micro-illustrations/car_insurance.svg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        Cuidar tu auto, es cuidar tu tranquilidad
                      </h5>
                      <p className="card-text">
                        BBVA y Rímac se unieron para que tengas la oportunidad
                        de estar tranquilo gracias a tu Seguro Vehicular
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          * Ver términos y condiciones
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://www.bbva.pe/content/dam/public-web/global/images/micro-illustrations/bbva_valora_locate_street.svg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        ¿Encuentra el hogar de tus sueños?
                      </h5>
                      <p className="card-text">
                        Encuentra el Crédito Hipotecario que necesitas.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          * Ver términos y condiciones
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirstPage;
