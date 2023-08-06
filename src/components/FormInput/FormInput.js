function FormInput({ labelName, type, placeholder }) {
  return (
    <>
      <label className="form-input__label">{labelName}</label>
      <input
        required
        type={type}
        className="form-input"
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
