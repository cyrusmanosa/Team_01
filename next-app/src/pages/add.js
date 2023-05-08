import style from "../styles/add.module.css";
import movePage from "./_route.js";

export default function add() {
  return (
    <div className={style.container}>
      <hr className={style.hr}></hr>
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
          <label htmlFor="department">部 門：</label>
          <input
            className={style.inputText}
            type="text"
            name="department"
            id="department"
            required
          />
        </div>

        <div className={style.Cen}>
          <a href="./completoin">
            <img src="./img/Cen2.png" width={100} />
          </a>
        </div>

        <div className={style.footerPart}>
          <h3 className="footerWord">システムの状況:X</h3>
        </div>
      </div>
      <hr className={style.hr}></hr>
    </div>
  );
}
