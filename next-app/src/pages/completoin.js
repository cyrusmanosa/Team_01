import style from "../styles/completion.module.css"
const completoin = () => {
    return (
        <div className={style.container}>
        <div>
            <h1 className={style.title}>登録完了</h1>
            <p className={style.text}>安全な場所に避難して周囲の安全を確保してください。</p>
        </div>
        <div>
            <form action="" method="post">
                <div>
                    <input 
                        className={style.company} 
                        type="button" 
                        value="社員の状況一覧" 
                        onClick="./managiment">
                    </input>
                </div>
                <div>
                    <input 
                        className={style.management} 
                        type="button" 
                        value="管理" 
                        onClick="./managiment">
                    </input>
                </div>
                <div>
                    <input 
                        className={style.logout} 
                        type="button" 
                        value="ログアウト" 
                        onClick="../pages">
                    </input>
                </div>
          </form>
        </div>
        <hr className={style.hr}></hr>
    </div>
    );
}

export default completoin;