import style from "../styles/situation.module.css";
import movePage from './_route.js';
const situation1 = () => {
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>安否登録</h1>
                <p className={style.text}>あなたの安否状況を教えてください。</p>
            </div>

            <form action="" method="post">
                <div>
                    <input className={style.safe} type="button" value="無事です" onClick={movePage("situation3")}></input>
                </div>
                <div>
                    <input className={style.dangerous} type="button" value="被害あり" onClick={movePage("situation3")}></input>
                </div>
            </form>

            <div className={style.img}>
                <div>
                    <a href="../pages/index.js"><img src="../pages/img/Left.png" width="100px"></img></a>
                </div>
                <h3>システムの状況</h3>
                <div>
                    <a href="../pages/situation2.js"><img src="../pages/img/Right.png" width="100px"></img></a>
                </div>
            </div>
            <hr className={style.hr}></hr>
        </div>
    );
}
export default situation1;
