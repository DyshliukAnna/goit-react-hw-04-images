import css from './Loader.module.css';
import { Audio } from 'react-loader-spinner';


 const Loader =()=>{
    return (
      <div className={css.Loader}>
        <Audio
          height="50"
          width="50"
          radius="50"
          color="#3f51b5"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  };
  export default Loader;
  