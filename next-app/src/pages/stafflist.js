import style from "../styles/situation.module.css";

export default function delComplete() {
  return (
    <>
      <hr className={style.hr}></hr>
      <p className="title">社員状況一覧</p>
      <table className={style.StaffList}>
        <tr>
          <td>123</td>
          <td>123</td>
        </tr>
        <tr>
          <td>456</td>
          <td>456</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
      
      <div className={style.Cen}>
        <a href="./menu.html">
          <img src="./Cen2.png" width="100px" />
        </a>
      </div>

      <div className={style.Cen}>
        <a href="./menu.html">
          <img src="Cen2.png" width={100} />
        </a>
      </div>

      <div className={style.footerPart}>
        <h3 className="footerWord">システムの状況:X</h3>
      </div>
      <hr className={style.hr}></hr>  
    </>
  );
}
