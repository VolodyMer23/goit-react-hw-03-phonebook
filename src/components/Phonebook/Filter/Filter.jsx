import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <FilterInput
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Search..."
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
