import style from "../styles/situation.module.css"

export default function addComplete() {
    return (
      <>
        <p className={style.title}>追加</p>
        <p classNaem={style.text}>新社員の情報を教えてください。</p>

        <div className={style.inputform}>

        <h2 className="Stitle"> 社員：（社員のID）追加できました</h2>
        <h2>ありがとうございました！</h2>

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