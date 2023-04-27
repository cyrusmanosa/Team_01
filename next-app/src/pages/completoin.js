import styles from "../styles/completion.module.css"

const completoin = () => {
    return (
        <div className={styles.container}>
        <div>
            <h1 className={styles.title}>登録完了</h1>
            <p className={styles.text}>安全な場所に避難して周囲の安全を確保してください。</p>
        </div>
        <div>
            <form action="" method="post">
                <div>
                    <input className={styles.company} type="button" value="社員の状況一覧" onClick="../pages"></input>
                </div>
                <div>
                    <input className={styles.management} type="button" value="管理" onClick="../pages"></input>
                </div>
                <div>
                    <input className={styles.logout} type="button" value="ログアウト" onClick="../pages"></input>
                </div>
          </form>
        </div>
        <hr className={styles.hr}></hr>
    </div>
    );
}

export default completoin;