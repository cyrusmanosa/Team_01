import style from "../styles/add.module.css";
import movePage from "./_route.js";

export default function add() {
  return (
    <div className={style.container}>
      <p className={style.title}>追加</p>
      <p className={style.text}>新社員の情報を教えてください。</p>

      <div className={style.inputform}>
        <div>
          <label htmlFor="staffName">社員の名前：</label>
          <input
            className={style.inputText}
            type="text"
            name="staffName"
            id="staffName"
            required
          />
        </div>

        <div>
          <label htmlFor="department">部　門　 ：</label>
          <input
            className={style.inputText}
            type="password"
            name="department"
            id="department"
            required
          />
        </div>

        <div className={style.img}>
          <div>
            <a href="./completoin">
              <img src="../img/Left.png" width="100px"></img>
            </a>
          </div>
          <h3>システムの状況</h3>
          <div>
            <a href="./addComplete">
              <img src="../img/Right.png" width="100px"></img>
            </a>
          </div>
        </div>
      </div>
      <hr className={style.hr}></hr>
    </div>
  );
}
