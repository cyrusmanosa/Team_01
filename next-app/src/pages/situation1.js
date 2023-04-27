import styles from "../styles/situation.module.css"
const situation1 = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>安否登録</h1>
                <p className={styles.text}>あなたの安否状況を教えてください。</p>
            </div>

            <form action="" method="post">
                    <div>
                        <input className={styles.safe} type="button" value="無事です" onClick="../pages/situation3.js"></input>
                    </div>
                    <div>
                        <input className={styles.dangerous} type="button" value="被害あり" onClick="../pages/situation3.js"></input>
                    </div>
            </form>

            <div className={styles.img}>
                <a href="../pages/Homepage.js"><img src="../img/Left.png" width="100px"></img></a>
                <h3>システムの状況</h3>
                <a href="../pages/situation2.js"><img src="../img/Right.png" width="100px"></img></a>
            </div>
            <hr className={styles.hr}></hr>
        </div>
    );
}

export default situation1;