import Image from "next/image";

const Intro = () => {
  return (
    <section style={{ height: "860px" }}>
      <div>
        <h2>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h2>
        <h2>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</h2>
      </div>
      <div>
        <Image
        src="/imgs/intro.png"
        width={800}
        height={500}
        alt="Image intro"
        ></Image>
      </div>
      <div>
        <h3>SKILLS. CONHECIMENTO. SKILLS.</h3>
        <h3>MUITO, MUITO ALÉM DOS TUTORIAIS!</h3>
      </div>
    </section>
  );
};

export default Intro;
