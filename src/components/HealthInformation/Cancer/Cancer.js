import { Link } from "react-router-dom";
import Patiencenav from "../../Navbar/Patiencenav";
import Footer from "../../Footer/Footer";

import "./Cancer.css";

const Cancer = () => {
  return (
    <div className="cancer-container">
      <Patiencenav />
      <div>
        <h1 className="cancer-heading">Learn about Cancer</h1>
        <h3 className="cancer-definition">What is cancer?</h3>
        <p>
          Cancer is a disease in which some of the body's cells grow
          uncontrollably and spread to other parts of the body.
        </p>
        <img
          className="cancer-img"
          src="https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/900/300/files/DNA-structure-enlarge.jpg?h=1cb9984c&itok=5X1x6Ow5"
          alt="cancer description"
        />
        <p>
          Cancer can start almost anywhere in the human body, which is made up
          of trillions of cells. Normally, human cells grow and multiply
          (through a process called cell division) to form new cells as the body
          needs them. When cells grow old or become damaged, they die, and new
          cells take their place. Sometimes this orderly process breaks down,
          and abnormal or damaged cells grow and multiply when they shouldn’t.
          These cells may form tumors, which are lumps of tissue. Tumors can be
          cancerous or not cancerous (benign).
        </p>
        <br />
        <p>
          Cancerous tumors spread into, or invade, nearby tissues and can travel
          to distant places in the body to form new tumors (a process called
          metastasis). Cancerous tumors may also be called malignant tumors.
          Many cancers form solid tumors, but cancers of the blood, such as
          leukemias, generally do not. Benign tumors do not spread into, or
          invade, nearby tissues. When removed, benign tumors usually don’t grow
          back, whereas cancerous tumors sometimes do. Benign tumors can
          sometimes be quite large, however. Some can cause serious symptoms or
          be life threatening, such as benign tumors in the brain.
        </p>
      </div>
      <div className="type-container">
        <h3 className="type-heading">Types of cancer</h3>
        <p>
          There are more than 100 types of cancer. Types of cancer are usually
          named for the organs or tissues where the cancers form. For example,
          lung cancer starts in the lung, and brain cancer starts in the brain.
          Cancers also may be described by the type of cell that formed them,
          such as an epithelial cell or a squamous cell.
        </p>
        <p className="list-info">
          Here are some categories of cancers that begin in specific types of
          cells:
        </p>
        <ul className="type-list">
          <li>Carcinoma</li>
          <li>Sarcoma</li>
          <li>Leukemia</li>
          <li>Lymphoma</li>
          <li>Multiple Myeloma</li>
          <li>Melanoma</li>
          <li>
            Brain and Spinal Cord Tumors
            <ul>
              <li>Germ Cell Tumors</li>
              <li>Neuroendocrine Tumors</li>
              <li>Carcinoid Tumors</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="cancer-develop">
        <h3>How Does Cancer Develop</h3>
        <div className="develop-container">
          <div className="develop-details">
            <p>
              Cancer is a genetic disease—that is, it is caused by changes to
              genes that control the way our cells function, especially how they
              grow and divide.
            </p>
            <p className="list-info">
              Genetic changes that cause cancer can happen because:
            </p>
            <ul>
              <li>of errors that occur as cells divide.</li>
              <li>
                of damage to DNA caused by harmful substances in the
                environment, such as the chemicals in tobacco smoke and
                ultraviolet rays from the sun
              </li>
              <li>they were inherited from our parents.</li>
            </ul>
            <p className="develop-info">
              The body normally eliminates cells with damaged DNA before they
              turn cancerous. But the body's ability to do so goes down as we
              age. This is part of the reason why there is a higher risk of
              cancer later in life.
            </p>

            <p className="list-info">
              Each person's cancer has a unique combination of genetic changes.
              As the cancer continues to grow, additional changes will occur.
              Even within the same tumor, different cells may have different
              genetic changes.
            </p>
          </div>
          <div>
            <img
              className="develop-img"
              src="https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/2019-06/1-how-does-cancer-form.jpg?h=b48714fe&itok=fc2eMUvr
            "
              alt="cancer description"
            />
          </div>
        </div>
        <div className="cancer-button">
          <a href="https://www.cancer.gov/about-cancer">
            <button className="learn-btn">Learn more about cancer here</button>
          </a>
          <Link to="/healthinfo">
            <button className="btn">
              <svg
                className="cancer-back-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
              </svg>
              Back
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cancer;
