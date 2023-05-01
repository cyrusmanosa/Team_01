import styles from "../styles/homepage.module.css";

export default function homepage() {
  return (
    <>
      <h1 className={styles.companyName}>
        （会社の名前）
        <br />
        災害時連絡掲示板
      </h1>
      <div className={styles.inputform}>
        <div>
          <label htmlFor="staffid">社員のID：</label>
          <input
            className={styles.inputText}
            type="text"
            name="staffid"
            id="staffid"
            required
          />
        </div>

        <div>
          <label htmlFor="password">暗証番号：</label>
          <input
            className={styles.inputText}
            type="password"
            name="password"
            id="password"
            min="1"
            max="12"
            required
          />
        </div>
      </div>
      <a href="./situation1">
        <button align="center" type="submit" className={styles.LoginSub}>
          登録
        </button>
      </a>
    </>
  );
}
