import style from "../styles/management.module.css";
import movePage from "./_route.js";

const management = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>管理</h1>
      </div>

      <form action="" method="post">
        <div>
          <input
            className={style.delete}
            type="button"
            value="削除"
            onClick={movePage("delete")}
          ></input>
        </div>
        <div>
          <input
            className={style.addition}
            type="button"
            value="追加"
            onClick={movePage("add")}
          ></input>
        </div>
      </form>

      <div className={style.img}>
        <div>
          <a href="./situation1">
            <img src="../img/Left.png" width="100px"></img>
          </a>
        </div>
        <h3>システムの状況</h3>
        <div>
          <a href="./situation3">
            <img src="../img/Right.png" width="100px"></img>
          </a>
        </div>
      </div>
      <hr className={style.hr}></hr>
    </div>
  );
};

export default management;
