import styles from './Control.module.css';

const Control = (props) => {
  return (
    <div className={styles.control}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} id={props.name}/>
      {props.valid && <p>Please enter valid data</p>}
    </div>
  );
};

export default Control;
