import "./input.css";

function Input({ type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="input-box">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} // ✅ FIX HERE (pass event directly)
      />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Input;