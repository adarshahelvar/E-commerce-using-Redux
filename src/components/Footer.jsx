import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </p>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </p>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </p>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </p>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </p>
          <p className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </p>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-1" />
                About
              </h6>
              <p>
                ADARSHA A<br /> A passionate and skilled ReactJS frontend
                developer, eager to bring innovation and creativity to the world
                of web development.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Men's</h6>
              <p>
                <p href="#!" className="text-reset">
                  T-Shirts
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Formal Shirts
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Formal Cambo
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Kurta's
                </p>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Women's </h6>
              <p>
                <p href="#!" className="text-reset">
                  Sarees
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Party Wears
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Lehangas
                </p>
              </p>
              <p>
                <p href="#!" className="text-reset">
                  Formals
                </p>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Karnataka, Shimogga 577401, INDIA
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                adarshaadi1997@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                98450-98450
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                98450-98450
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <p
          className="text-reset fw-bold"
          href="https://github.com/adarshahelvar"
        >
          Adarsha's GitHub
        </p>
      </div>
    </MDBFooter>
  );
}
