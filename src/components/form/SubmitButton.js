import styles from './SubmitButton.module.css'

function SubmitButton({text}){
    return(
        <div className={styles.btn} >
           <button className={styles.btn} > <p>{text}</p> </button>
        </div>
    )
}

export default SubmitButton;