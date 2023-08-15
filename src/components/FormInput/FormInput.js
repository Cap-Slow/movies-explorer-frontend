function FormInput({
  labelName,
  type,
  placeholder,
  onInputChange,
  inputName,
  minlength,
  maxlength,
  isInputDisabled,
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
        disabled={isInputDisabled}
        {...(minlength !== undefined ? { minLength: minlength } : {})}
        {...(maxlength !== undefined ? { maxLength: maxlength } : {})}
      />
    </>
  );
}

export default FormInput;
