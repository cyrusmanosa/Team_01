import styles from "../styles/management.module.css"
const management = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>管理</h1>
            </div>

            <form action="" method="post">
                <div>
                    <input className={styles.delete} type="button" value="削除" onClick="../pages"></input>
                </div>
                <div>
                    <input className={styles.addition} type="button" value="追加" onClick="../pages"></input>
                </div>
            </form>

            <div className={styles.img}>
                <a href="../pages/completion.js"><img src="../img/Left.png"></img></a>
                <a href="../pages"><img src="../img/Right.png"></img></a>
            </div>
            <hr className={styles.hr}></hr>
        </div>
    );
}

export default management;