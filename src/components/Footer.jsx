import React from "react";
import { InstagramSVGL } from "./svg-links/InstagramSVGL";
import { FacebookSVGL } from "./svg-links/FacebookSVGL";
import { TiktokSVGL } from "./svg-links/TiktokSVGL";

export const Footer = () => {
  return (
    <>
      <footer className="container text-center">
        <div className="col">
        <img width={150} height={150}
          src="src\assets\img\footer\ABARROTITO-150x150.png" />
        </div>
        <div className="container text-center">
          <div className="row justify-content-md-center">
            <div className="col-2">
              <InstagramSVGL />
            </div>
            <div className="col-2">
              <FacebookSVGL />
            </div>
            <div className="col-2">
              <TiktokSVGL />
            </div>
          </div>
        </div>
        <div className="col">© 2018 Todos los Derechos Reservados </div>
      </footer>
    </>
  );
};
