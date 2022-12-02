import { Link } from 'react-router-dom';
import Patiencenav from '../../Navbar/Patiencenav';
import './Stroke.css';

const Stroke = () => {
  return (
    <div className="stroke-container">
      <Patiencenav />
      <h1 className="stroke-heading">Learn about Stroke</h1>
      <div className="stroke-definition">
        <h3>What is Stroke?</h3>
        <p className="definition-info">
          Stroke is a disease that affects the arteries leading to and within
          the brain.
          <br />A stroke occurs when a blood vessel that carries oxygen and
          nutrients to the brain is either blocked by a clot or bursts (or
          ruptures). When that happens, part of the brain cannot get the blood
          (and oxygen) it needs, so it and brain cells die.
        </p>
        <img
          className="stroke-img"
          src="https://www.stroke.org/-/media/Stroke-Images/About-Stroke/Illustration-of-a-Stroke_04.png?h=600&iar=0&mw=600&w=600&hash=AF04436AC864C7D1D7BEDDFF072C7A2A"
          alt="stroke description"
        />
      </div>
      <div className="cause-container">
        <h2 className="cause-heading">Causes of Stroke</h2>
        <p>
          There are two main causes of stroke: a blocked artery (ischemic
          stroke) or leaking or bursting of a blood vessel (hemorrhagic stroke).
          Some people may have only a temporary disruption of blood flow to the
          brain, known as a transient ischemic attack (TIA), that doesn't cause
          lasting symptoms.
        </p>
        <h4 className="cause-section">Ischemic stroke</h4>
        <div className="cause-info">
          <p>
            This is the most common type of stroke. It happens when the brain's
            blood vessels become narrowed or blocked, causing severely reduced
            blood flow (ischemia). Blocked or narrowed blood vessels are caused
            by fatty deposits that build up in blood vessels or by blood clots
            or other debris that travel through the bloodstream, most often from
            the heart, and lodge in the blood vessels in the brain
          </p>
          <img
            className="cause-img"
            src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2014/10/29/13/33/r7_ischemicstroke.jpg"
            alt="stroke description"
          />
        </div>
        <div className="cause-container">
          <h4 className="cause-section">Hemorrhagic stroke</h4>
          <div className="cause-hemorrhagic">
            <div>
              <p>
                Hemorrhagic stroke occurs when a blood vessel in the brain leaks
                or ruptures. Brain hemorrhages can result from many conditions
                that affect the blood vessels. Factors related to hemorrhagic
                stroke include:
              </p>
              <ul>
                <li>Uncontrolled high blood pressure</li>
                <li>Overtreatment with blood thinners (anticoagulants)</li>
                <li>
                  Bulges at weak spots in your blood vessel walls (aneurysms)
                </li>
                <li>Trauma (such as a car accident)</li>
                <li>
                  Protein deposits in blood vessel walls that lead to weakness
                  in the vessel wall (cerebral amyloid angiopathy)
                </li>
                <li>Ischemic stroke leading to hemorrhage</li>
              </ul>
            </div>
            <img
              src="https://www.bing.com/th?id=OCII.68C9444253AC4FC854D443DDC1CF7318508DB5B7FDBFD46A0D36B2F1B37A7019&w=245&h=170&o=6&dpr=1.3&pid=HealthConditionsMainline"
              alt="stroke description"
            />
          </div>
        </div>
        <div cause-container>
          <h4 className="cause-section">Transient ischemic attack (TIA)</h4>
          <p>
            A transient ischemic attack (TIA) — sometimes known as a ministroke
            — is a temporary period of symptoms similar to those in a stroke. A
            TIA doesn't cause permanent damage. A TIA is caused by a temporary
            decrease in blood supply to part of the brain, which may last as
            little as five minutes.
            <br />
            Like an ischemic stroke, a TIA occurs when a clot or debris reduces
            or blocks blood flow to part of the nervous system
          </p>
          <p>
            Seek emergency care even if you think you've had a TIA because your
            symptoms got better. It's not possible to tell if you're having a
            stroke or TIA based only on the symptoms. If you've had a TIA, it
            means you may have a partially blocked or narrowed artery leading to
            the brain. Having a TIA increases your risk of having a full-blown
            stroke later.
          </p>
        </div>
      </div>
      <div className="symptoms-container">
        <h3 className="symptoms-heading">Symptoms</h3>
        <p className="symptoms-info">
          If you or someone you're with may be having a stroke, pay particular
          attention to the time the symptoms began. Some treatment options are
          most effective when given soon after a stroke begins.
        </p>
        <p className="symptoms-info">Signs and symptoms of stroke include:</p>
        <ul>
          <li>
            <strong>
              Trouble speaking and understanding what others are saying.
            </strong>
            <p>
              You may experience confusion, slur words or have difficulty
              understanding speech.
            </p>
          </li>
          <li>
            <strong>Paralysis or numbness of the face, arm or leg.</strong>
            <p>
              You may develop sudden numbness, weakness or paralysis in the
              face, arm or leg. This often affects just one side of the body.
              Try to raise both your arms over your head at the same time. If
              one arm begins to fall, you may be having a stroke. Also, one side
              of your mouth may droop when you try to smile.
            </p>
          </li>
          <li>
            <strong>Problems seeing in one or both eyes.</strong>
            <p>
              You may suddenly have blurred or blackened vision in one or both
              eyes, or you may see double.
            </p>
          </li>
          <li>
            <strong>Headache.</strong>
            <p>
              A sudden, severe headache, which may be accompanied by vomiting,
              dizziness or altered consciousness, may indicate that you're
              having a stroke.
            </p>
          </li>
          <li>
            <strong>Trouble walking.</strong>
            <p>
              You may stumble or lose your balance. You may also have sudden
              dizziness or a loss of coordination.
            </p>
          </li>
        </ul>
      </div>
      <h3 className="see-doctor">When to see a doctor?</h3>
      <div>
        <p className="see-doctor-info">
          <strong>Seek immediate medical attention </strong>if you notice any
          signs or symptoms of a stroke, even if they seem to come and go or
          they disappear completely. Think "FAST" and do the following:
        </p>
        <ul>
          <li>
            <strong>Face. </strong>Ask the person to smile. Does one side of the
            face droop?
          </li>
          <li>
            <strong>Arms. </strong>Ask the person to raise both arms. Does one
            arm drift downward? Or is one arm unable to rise?
          </li>
          <li>
            <strong>Speech. </strong> Ask the person to repeat a simple phrase.
            Is his or her speech slurred or strange?
          </li>
          <li>
            <strong>Time. </strong>If you observe any of these signs, call 911
            or emergency medical help immediately.
          </li>
        </ul>
        <p className="see-doctor-fast">
          Call your local emergency number right away. Don't wait to see if
          symptoms stop. Every minute counts. The longer a stroke goes
          untreated, the greater the potential for brain damage and disability.
          <br />
          If you're with someone you suspect is having a stroke, watch the
          person carefully while waiting for emergency assistance.
        </p>
      </div>
      <div className="stroke-button">
        <a href="https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113">
          <button className="learn-btn">Learn more about stroke here</button>
        </a>
        <Link to="/healthinfo">
          <button className="btn">
            <svg
              className="stroke-back-svg"
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
  );
};

export default Stroke;
