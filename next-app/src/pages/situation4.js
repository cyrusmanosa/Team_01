import style from "../styles/situation.module.css";
import movePage from './_route.js';
const situation4 = () => {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}>安否登録</h1>
                <p className={style.text}>けがの度合は？</p>
            </div>

            <form action="" method="post">
                <div>
                    <input className={style.safe} type="button" value="軽症" onClick={movePage("../pages/index.js")}></input>
                </div>
                <div>
                    <input className={style.dangerous} type="button" value="重症" onClick={movePage("../pages/index.js")}></input>
                </div>
            </form>

            <div className={style.img}>
                <a href="../pages/situation3"><img src="../img/Left.png" width="100px"></img></a>
                <h3>システムの状況</h3>
                <a href="../pages/completoin.js"><img src="../img/Right.png" width="100px"></img></a>
            </div>
            <hr className={style.hr}></hr>
        </div>
    );
}

export default situation4;
