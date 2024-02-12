/* eslint-disable react/prop-types */
const CheckboxWithLabel = ({ label, isChecked, onChange }) => {
  return (
    <label style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        style={{ marginLeft: '8px' }}
      />
      <span>{label}</span>
    </label>
  );
};

export default CheckboxWithLabel;
