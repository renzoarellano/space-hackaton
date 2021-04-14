import React from "react";
import { userContext } from "../context/Provider";
import { RANDOM_RESULT } from "../utils/config";
const ThridPage = () => {
  const { user, userID } = React.useContext(userContext);
  RANDOM_RESULT.sort(function (a, b) {
    if (a.ranNumber > b.ranNumber) {
      return 1;
    }
    if (a.ranNumber < b.ranNumber) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const sendingOption = async (idProduct) => {
    const data = {
      id_interno: userID,
      id_producto: idProduct,
    };
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      await fetch(
        "https://bbva-service.herokuapp.com/api/public/clientProducts",
        requestOptions
      ).then((response) => {
        console.log(
          "🚀 ~ file: thridPage.jsx ~ line 32 ~ ).then ~ response",
          response
        );
        if (response.status === 200) {
          console.log("Guardado");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <div className="container-fluid" style={{ marginBottom: "240px" }}>
        <div className="container">
          <div className="row mb-5 mt-4">
            <div className="col-md-5">
              <div className="mt-3 mb-3">
                <h4>
                  ¡{user ? user.displayName : ""}, ESTOS SON LOS PRODUCTOS
                  RECOMENDADOS PARA TI!
                </h4>
                <p className="text-user-card">
                  Gracias por usar <b>ContiRecomienda</b> para ver los productos
                  que mejor se acomodan a tu perfil. Al lado derecho puedes ver
                  los productos que tenemos recomendados para ti.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              {RANDOM_RESULT.map((product, index) => (
                <div
                  className="card mb-3"
                  style={{ cursor: "pointer" }}
                  key={product.ranNumber}
                  onClick={() => sendingOption(product.id)}
                >
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img className="w-full" src={product.img} alt="..." />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        {index === 0 ? (
                          <React.Fragment>
                            <img
                              width="20"
                              src="https://www.bbva.pe/content/dam/public-web/global/images/icons/5_013_promotion.svg"
                              alt=""
                            />
                            <h6 className="text-recomendado">
                              Más recomendado
                            </h6>
                          </React.Fragment>
                        ) : null}
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text mb-0">{product.description}</p>
                        <p className="card-text">
                          <a href={product.link_extra}>Ver más</a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThridPage;
