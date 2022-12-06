import './Diabetes.css';
import { Link } from 'react-router-dom';
import NavDoctor from '../../Navbar/NavDoctor';

const DocDiabetes = () => {
  return (
    <div className="diabetes-container">
      <NavDoctor />
      <h1 className="diabetes-heading">Learn about Diabetes</h1>

      <div className="diabetes-definition">
        <h3>What is Diabetes?</h3>
        <p className="def-details">
          A metabolic disorder in which the body has high sugar levels for
          prolonged periods of time.
        </p>
        <img
          className="diabetes-front-img"
          src="https://static.toiimg.com/thumb/msid-61486507,imgsize-112941,width-800,height-600,resizemode-75/61486507.jpg"
          alt="diabetes description"
        />
      </div>
      <div className="symptoms-container">
        <h3>Symptoms of Diabetes?</h3>
        <div className="symptoms">
          <div className="symptoms-details">
            <p className="symptoms-info">
              The following symptoms of diabetes are typical. However, some
              people with diabetes have symptoms so mild that they go unnoticed.
            </p>
            <ul className="symptoms-list">
              These are common symptoms of diabetes:
              <li>Urinating often</li>
              <li>Feeling very thirsty</li>
              <li>Feeling very hungry—even though you are eating</li>
              <li>Extreme fatigue</li>
              <li>Blurry vision</li>
              <li>Cuts/bruises that are slow to heal</li>
              <li>Weight loss—even though you are eating more (type 1)</li>
              <li>Tingling, pain, or numbness in the hands/feet (type 2)</li>
            </ul>
          </div>
          <div>
            <img
              className="sypmtoms-img"
              src="https://th.bing.com/th/id/OIP.j3TU-Pws0szuABS6P47fdQHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="diabetes sypmtoms"
            />
          </div>
        </div>
      </div>

      <div className="type">
        <h4 className="type-heading">Types of Diabetes?</h4>
        <p>There are three common types of diabetes</p>
        <ul>
          <li>Type 1 diabetes</li>
          <li>Type 2 diabetes</li>
          <li>Gestationa diabetes</li>
        </ul>
        <div className="card-container">
          <div className="diabetes-card">
            <h4 className="card-heading">Type 1 Diabetes</h4>
            <img
              className="card-img"
              src="https://th.bing.com/th/id/OIP.Ib9iPWYn6JfMEKvKVCQ40AHaFG?w=285&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="diabetes description"
            />
            <p>
              In type 1 diabetes, the body does not produce insulin. The body
              breaks down the carbohydrates you eat into blood glucose (blood
              sugar) that it uses for energy—and insulin is a hormone that the
              body needs to get glucose from the bloodstream into the cells of
              the body. With the help of insulin therapy and other treatments,
              everyone can learn to manage their condition and live long,
              healthy lives.
            </p>
          </div>
          <div className="diabetes-card">
            <h4 className="card-heading">Type 2 Diabetes</h4>
            <img
              className="card-img"
              src="https://th.bing.com/th/id/OIP.PgFXCmVqHvp1d68ZDUph3wHaD4?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="diabetes description"
            />
            <p>
              Type 2 diabetes is the most common form of diabetes—and it means
              that your body doesn't use insulin properly. And while some people
              can control their blood glucose levels with healthy eating and
              exercise, others may need medication or insulin to help manage it.
            </p>
            <p>
              A key part of managing type 2 diabetes is maintaining a healthy
              diet. You need to eat something sustainable that helps you feel
              better and still makes you feel happy and fed. Fitness is another
              key to managing type 2.
            </p>
          </div>
          <div className="diabetes-card">
            <h3 className="card-heading">Gestationa Diabetes</h3>
            <img
              className="card-img"
              src="https://th.bing.com/th/id/OIP.HAzZ38TpWrDWQLKq6BKZNwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="diabetes description"
            />
            <p>
              Gestational diabetes can be a scary diagnosis, but like other
              forms of diabetes, it's one that you can manage. It doesn't mean
              that you had diabetes before you conceived or that you will have
              diabetes after you give birth. It means that, by working with your
              doctor, you can have a healthy pregnancy and a healthy baby.
            </p>
            <p>
              The placenta supports the baby as it grows. Sometimes, these
              hormones also block the action of the mother's insulin to her body
              and it causes a problem called insulin resistance. This insulin
              resistance makes it hard for the mother's body to use insulin. And
              this means that she may need up to three times as much insulin to
              compensate.
            </p>
          </div>
        </div>
        <div className="diabetes-button">
          <a href="https://diabetes.org/diabetes">
            <button className="learn-btn">
              Learn more about diabetes here
            </button>
          </a>
          <Link to="/dochealthinfo">
            <button className="btn">
              <svg
                className="diabetes-back-svg"
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
    </div>
  );
};

export default DocDiabetes;
