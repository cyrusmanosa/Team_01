import style from "../styles/situation.module.css"

export default function add() {
  return (
    <>
      <p className={style.title}>追加</p>
      <p className={style.text}>新社員の情報を教えてください。</p>

      <div className={style.inputform}>

      <div>
        <label htmlFor="staffName">社員の名前：</label>
        <input className={style.inputText} type="text" name="staffName" id="staffName" required />
      </div>

      <div>
        <label htmlFor="department">部門：</label>
        <input className={style.inputText} type="password" name="department" id="department" required />
      </div>
      
      <div><button type="submit" className={style.LoginSub}>新社員登録</button></div>

      <div className={style.Cen}>
        <a href="./menu.html"><img src="Cen2.png" width={100} /></a>
      </div>

      <div className={style.footerPart}>
        <h3 className="footerWord">システムの状況:X</h3>
      </div>

    </div>
    </>
  );
}