import React from "react";
import styles from "./transferDate.module.css";

const TransferData = ({ transferData }) => {
  console.log(transferData);
  const shareData = () => {
    const userAddess = document.querySelector(".address").value;
    try {
      if (userAddess) {
        transferData(userAddess);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.middle_content}>
        <form>
          <input
            type="text"
            placeholder="Enter token for transfer"
            className={styles.address}
          />
          <button type="button" className={styles.button} onClick={shareData}>
            Share data
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferData;
