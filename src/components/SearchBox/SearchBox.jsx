import { ImSearch } from 'react-icons/im';

import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = searchedValue => {
    dispatch(changeFilter(searchedValue));
  };

  return (
    <div>
      <label className={styles.label}>
        <span className={styles.label_title}>
          Find contacts by name or number
        </span>

        <input
          onChange={event => {
            handleChange(event.target.value);
          }}
          className={styles.input}
          type="text"
          value={filter}
          placeholder="Start typing..."
        />

        <ImSearch className={styles.ico} />
      </label>
    </div>
  );
};

export default SearchBox;
