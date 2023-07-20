import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span>🙄</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.text}>
        к сожалению, данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
