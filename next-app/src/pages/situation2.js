import style from "../styles/situation.module.css";
import movePage from "./_route.js";
const situation2 = () => {
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>安否登録</h1>
                <p>怪我をしていますか？</p>
            </div>

            <form action="" method="post">
                <div>
                    <input className={style.safe} type="button" value="怪我無し" onClick={movePage("situation3")}></input>
                </div>
                <div>
                    <input className={style.dangerous} type="button" value="怪我有り" onClick={movePage("situation3")}></input>
                </div>
            </form>

            <div className={style.img}>
                <div>
                    <a href="../pages/situation1.js"><img src="../img/Left.png" width="100px"></img></a>
                </div>
                <h3>システムの状況</h3>
                <div>
                    <a href="../pages/situation3.js"><img src="../img/Right.png" width="100px"></img></a>
                </div>
            </div>
            <hr className={style.hr}></hr>
        </div>
    );
}

export default situation2;
