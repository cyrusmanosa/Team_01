import style from "../styles/situation.module.css";
import movePage from "./_route.js";
const situation3 = () => {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}>安否登録</h1>
                <p>あなたの安否状況を教えてください。</p>
            </div>

            <form action="" method="post">
                <div>
                    <input className={style.safe} type="button" value="無事です" onClick={movePage("situation3")}></input>
                </div>
                <div>
                    <input className={style.dangerous} type="button" value="危険です" onClick={movePage("situation3")}></input>
                </div>
            </form>

            <div className={style.img}>
                <a href="../pages/situation1.js"><img src="../img/Left.png" width="100px"></img></a>
                <h3>システムの状況</h3>
                <a href="../pages/situation3.js"><img src="../img/Right.png" width="100px"></img></a>
            </div>
            <hr className={style.hr}></hr>
        </div>
    );
}

export default situation3;
