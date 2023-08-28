import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturesForm = (props) => {
  const [isFormValid, setFormValid] = useState(true);

  const navigate = useNavigate();

  const titleInputRef = useRef();
  const actionInputRef = useRef();
  const stateInputRef = useRef();
  const descriptionInputRef = useRef();

  const checkValid = () => {
    if (
      titleInputRef.current.value === "" ||
      actionInputRef.current.value === "" ||
      stateInputRef.current.value === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const resetFields = () => {
    titleInputRef.current.value = "";
    actionInputRef.current.value = "";
    stateInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();

    const titleValue = titleInputRef.current.value;
    const actionValue = actionInputRef.current.value;
    const stateValue = stateInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
      name: titleValue,
      action: actionValue,
      state: stateValue,
      id: Math.random() * 100,
      // id: props.currentItems,
    };

    props.updateTheFeatures(newFeature);

    resetFields();

    navigate('/smart-home');
  };

  return (
    <div>
      <form
        className={`form ${isFormValid ? "valid" : "invalid"}`}
        onSubmit={submitHandler}
        noValidate
      >
        <div className="control">
          <label htmlFor="title">Feature title</label>
          <input type="text" id="title" required ref={titleInputRef}></input>
        </div>
        <div className="control">
          <label htmlFor="action">Feature action</label>
          <input type="text" id="action" required ref={actionInputRef}></input>
        </div>
        <div className="control">
          <label htmlFor="state">Feature state</label>
          <input type="text" id="state" required ref={stateInputRef}></input>
        </div>
        <div className="control">
          <label htmlFor="description">Feature description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="actions">
          <button>Add feature</button>
        </div>
      </form>
    </div>
  );
};

export default FeaturesForm;
