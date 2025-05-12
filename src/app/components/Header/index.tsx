import style from "./index.module.scss";

export default function Header() {
  return (
    <section className={style.scrollSection}>
      <div className={style.textWrapper}>
        <h1 className={`${style.textTop} text-medium text-primary display-md`}>
          <span className={`${style.prefix} capitalize`}>
            A melhor faculdade
          </span>
          {" "} de {" "} 
          <span className={`capitalize`}>
            tecnologia
          </span>
        </h1>
        <h1
          className={`${style.textBottom} text-ultra text-gray-700 display-xl uppercase`}
        >
          sobre
        </h1>
      </div>
    </section>
  );
}
