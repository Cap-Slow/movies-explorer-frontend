function FormInput({
  labelName,
  type,
  placeholder,
  onInputChange,
  inputName,
  minlength,
  maxlength,
}) {
  return (
    <>
      <label className="form-input__label">{labelName}</label>
      <input
        required
        type={type}
        className="form-input"
        placeholder={placeholder}
        name={inputName}
        onChange={onInputChange}
        {...(minlength !== undefined ? { minLength: minlength } : {})}
        {...(maxlength !== undefined ? { maxLength: maxlength } : {})}
      />
    </>
  );
}

export default FormInput;
