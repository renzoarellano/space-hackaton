import React from "react";
import { userContext } from "../context/Provider";
const ThridPage = () => {
  const { user } = React.useContext(userContext);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-5 mt-4">
            <div className="col-md-5">
              <div className="mt-3 mb-3">
                <h4>
                  ¡{user ? user.displayName : ""}, ESTOS SON LOS PRODUCTOS
                  RECOMENDADOS PARA TI!
                </h4>
                <p className="text-user-card">
                  Gracias por usar NOMNBRE_APP para ver los productos que mejor
                  se acomodan a tu perfil. Al lado derecho puedes ver los
                  productos que tenemos recomendados para ti.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                      className="w-full"
                      src="https://www.bbva.pe/content/dam/public-web/peru/photos/cards/card-periodo-gracia-motivo-oct-claro.jpg.img.768.1601644843593.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <img
                        width="20"
                        src="https://www.bbva.pe/content/dam/public-web/global/images/icons/5_013_promotion.svg"
                        alt=""
                      />
                      <h6 className="text-recomendado">Más recomendado</h6>
                      <h5 className="card-title">Prestamo personal</h5>
                      <p className="card-text mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p className="card-text">
                        <a href="#">Ver más</a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                      className="w-full"
                      src="https://www.bbva.pe/content/dam/public-web/peru/photos/cards/card-seguro-oct_v1.jpg.img.768.1601503249035.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Seguro vehicular</h5>
                      <p className="card-text mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p className="card-text">
                        <a href="#">Ver más</a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                      className="w-full"
                      src="https://www.bbva.pe/content/dam/public-web/peru/photos/cards/card-prestamo-hipotecario-ahorro-flexible.jpg.img.320.1579645938952.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Crédito hipotecario</h5>
                      <p className="card-text mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <p className="card-text">
                        <a href="#">Ver más</a>{" "}
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

export default ThridPage;
