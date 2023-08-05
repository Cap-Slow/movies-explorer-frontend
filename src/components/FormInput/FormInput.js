function FormInput({ labelName, type }) {
  return (
    <>
      <label className="form-input__label">{labelName}</label>
      <input required type={type} className="form-input" />
    </>
  );
}

export default FormInput;
