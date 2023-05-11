import style from "../styles/situation.module.css";
import movePage from "./_route.js";
const situation5 = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>安否登録</h1>
        <p className={style.text}>避難はできますか？</p>
      </div>

      <form action="" method="post">
        <div>
          <input
            className={style.safe}
            type="button"
            value="はい"
            onClick={movePage("completoin")}
          ></input>
        </div>
        <div>
          <input
            className={style.dangerous}
            type="button"
            value="いいえ"
            onClick={movePage("completoin")}
          ></input>
        </div>
      </form>

      <div className={style.img}>
        <a href="./situation4">
          <img src="../img/Left.png" width="100px"></img>
        </a>
        <h3>システムの状況</h3>
        <a href="./completoin">
          <img src="../img/Right.png" width="100px"></img>
        </a>
      </div>
      <hr className={style.hr}></hr>
    </div>
  );
};

export default situation5;
