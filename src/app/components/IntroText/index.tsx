import styles from "./introText.module.css";

const IntroText = () => {
  return (
    <div className={styles.introText}>
      <p>
        A CRESCER se inspira na Abordagem Reggio Emilia, que é um modelo educacional que
        se destaca por valorizar a criança como um ser ativo, criativo e capaz de construir
        conhecimento em um ambiente educativo rico, colaborativo e estimulante. Esses princípios
        se baseiam na crença de que as crianças são capazes de construir seu próprio conhecimento
        quando são estimuladas, inspiradas e envolvidas em um ambiente educativo que valoriza
        sua curiosidade natural e sua sede de aprender.
      </p>
    </div>
  );
};

export default IntroText;
