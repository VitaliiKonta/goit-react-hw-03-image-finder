import css from './modalImg.module.css';
import PropTypes from 'prop-types';

const ModalImg = ({ img }) => {
  return (
    <div className={css.ModalImg}>
      <img src={img} alt={img.name} />
    </div>
  );
};

export default ModalImg;

ModalImg.propTypes = {
  img: PropTypes.string.isRequired,
};
