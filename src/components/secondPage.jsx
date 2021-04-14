import React from "react";
import { userContext } from "../context/Provider";
import DatePicker from "react-date-picker";
import { useHistory } from "react-router-dom";
const SecondPage = () => {
  const history = useHistory();
  const nextStep = () => history.push("paso-3");
  const { user } = React.useContext(userContext);
  const [dni, setDNI] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [failedDNI, setFailedDNI] = React.useState(false);
  const [failedDate, setFailedDate] = React.useState(false);
  const _handleDNI = (text) => {
    const regexDNI = /\d{8}$/g;
    if (!regexDNI.test(text)) {
      setFailedDNI(true);
    } else {
      setFailedDNI(false);
    }
    setDNI(text);
  };
  const _handleDate = (text) => {
    setDate(text);
  };

  const sendingData = () => {
    if (dni && date) {
      const postData = { ...user, dni: dni, fechanac: date };
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        };
        fetch(
          "https://spacehackathon.azurewebsites.net/api/cliente/post",
          requestOptions
        ).then((response) => {
          console.log("response", response);
          if (response.status === 200) {
            nextStep();
          }
          /*  response.json(); */
        });
      } catch (error) {
        console.error(error);
      }
      console.log(
        "🚀 ~ file: secondPage.jsx ~ line 37 ~ sendingData ~ postData",
        postData
      );
    }
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mb-5 mt-4">
          <div className="col-md-5 optionsLeftRow">
            <div className="mt-3 mb-3">
              <h4>Cuéntanos un poco más de ti</h4>
            </div>
            <div className="card mb-3" style={{ maxWidth: "400px" }}>
              {user ? (
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <div className="card-body">
                      <img
                        width="80"
                        height="80"
                        className="rounded-circle mt-10"
                        src={user.photoURL}
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body ml-1">
                      <h6
                        style={{ fontWeight: 600 }}
                        className="card-title mb-0 mt-2"
                      >
                        {user.displayName}
                      </h6>
                      <p className="card-text text-user-card">
                        Correo: {user.email} <br />
                        Celular: {user.phoneNumber || "Sin celular"}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="form-1">
              <div className="row">
                <div className="col-md-4">
                  <div className="box-dni">
                    <h6 className="mt-1">DNI</h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <input
                    className="form-control"
                    type="text"
                    value={dni}
                    onChange={(e) => _handleDNI(e.target.value)}
                    placeholder="Número de documento"
                  />
                  <p
                    style={
                      failedDNI
                        ? { visibility: "visible" }
                        : { visibility: "hidden" }
                    }
                  >
                    Coloque su DNI correctamente
                  </p>
                </div>
              </div>{" "}
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="box-dni">
                    <h6 className="mt-1">Fec. de Nacimiento</h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <DatePicker
                    className="dateclassName"
                    onChange={_handleDate}
                    value={date}
                  />
                </div>
                <p
                  style={
                    failedDate
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  Seleccione una fecha
                </p>
              </div>
              <div className="mt-5">
                <button
                  onClick={() => sendingData()}
                  className="btn btn-primary btn-continue"
                >
                  Ver mis productos
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-center">
            <img
              className="w-full"
              style={{ maxWidth: "500px" }}
              src="https://www.bbva.pe/content/dam/public-web/peru/photos/marquees/banner-empresas-3.png.img.768.1618413378100.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
