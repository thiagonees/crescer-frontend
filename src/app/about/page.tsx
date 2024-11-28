// pages/about.tsx
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Frist Section */}
      <section className={styles.section}>
        <h2 className={styles.title}>A Realização de um Sonho...</h2>
        <p className={styles.text}>
          Há muitos anos, pulsava no meu coração o desejo fervoroso de
          proporcionar um ambiente acolhedor e educativo para as crianças. O resultado
          desse sonho, do meu amor pela educação infantil e da incansável dedicação ao
          longo dos meus 26 anos de carreira, foi a fundação do Espaço de
          Desenvolvimento Infantil <b><b>CRESCER</b></b>.
          <br /><br />
          A ideia do espaço nasceu da minha percepção de que as crianças,
          especialmente na pré-infância, precisam de mais do que apenas conhecimento
          acadêmico. Elas necessitam de um espaço seguro, estimulante e cheio de amor,
          onde cada traço de criatividade seja encorajado e cada pequeno ser seja nutrido
          em seu desenvolvimento integral.
          <br /><br />
          O meu legado vive na risada das crianças, na alegria dos pais ao verem o
          desenvolvimento de seus filhos e na transformação positiva que a educação
          infantil pode trazer para uma comunidade.
          <br /><br />
          A <b><b>CRESCER</b></b> é mais do que um espaço de aprendizagem; é um testemunho
          do poder de Deus que realiza sonhos.
        </p>
        <Image
          className={styles.image1}
          src="/images/image-1.jpeg"
          alt="Next.js logo"
          width={500}
          height={600}
          priority
        />
        <p className={styles.text}>Com muito amor, Tia Rosa.</p>
      </section>

      {/* Second Seção */}
      <section className={styles.section}>
        <h2 className={styles.title}>NOSSA METODOLOGIA</h2>
        <p className={styles.text}>
          A <b>CRESCER</b> se inspira na Abordagem Reggio Emilia, que é um modelo educacional que
          se destaca por valorizar a criança como um ser ativo, criativo e capaz de construir
          conhecimento em um ambiente educativo rico, colaborativo e estimulante. Esses princípios
          se baseiam na crença de que as crianças são capazes de construir seu próprio conhecimento
          quando são estimuladas, inspiradas e envolvidas em um ambiente educativo que valoriza
          sua curiosidade natural e sua sede de aprender.
          <br /><br />
          Dessa forma, a <b>CRESCER</b> proporciona ambientes preparados com intencionalidade,
          visando promover o desenvolvimento integral da criança, nas áreas: física, cognitiva,
          emocional, social e moral. Trabalhamos a interconexão dessas áreas ao proporcionar
          oportunidades variadas e enriquecedoras para a criança em todas essas dimensões. Um
          ambiente de apoio, estimulante e seguro é crucial para promover um desenvolvimento
          integral saudável na infância.
          <br /><br />
          Aqui, também abraçamos a visão inovadora da pediatra húngara Emmi Pikler,
          centrada na importância da autonomia, respeito e amor na educação infantil. Buscamos
          reconhecer a singularidade de cada criança, valorizando suas necessidades, ritmos e
          habilidades únicas. Promovemos a liberdade de movimento para que as crianças explorem
          e desenvolvam suas habilidades motoras de forma independente e segura. Valorizamos um
          ambiente físico cuidadosamente preparado para permitir a exploração e o aprendizado
          autônomo, com brinquedos.
        </p>
      </section>

      {/* Third Section */}
      <section className={styles.section}>
        <h2 className={styles.title}>QUINTAL DEIXA SER CRIANÇA</h2>
        <p className={styles.text}>
          Um espaço com contato direto com a natureza para as crianças é muito mais do que um local para
          brincar. É um ambiente onde os fundamentos do desenvolvimento infantil são enriquecidos naturalmente.
          A natureza oferece uma gama infinita de experiências sensoriais: cores, texturas, cheiros e sons
          únicos. Esses estímulos contribuem para o desenvolvimento sensorial das crianças, expandindo sua
          percepção do mundo ao redor.
          <br /><br />
          Além disso, esse espaço natural incentiva a exploração ativa. As crianças têm a liberdade de se
          mover, correr, escalar, pular e interagir com elementos naturais. Isso não apenas promove um estilo de vida
          ativo, mas também estimula o desenvolvimento motor e físico.
        </p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/image-2.jpeg"
            alt="Nature and child"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-3.jpeg"
            alt="Nature and exploration"
            width={450}
            height={500}
            priority
          />
        </div>
        <Image
          className={styles.image}
          src="/images/image-4.jpeg"
          alt="Nature and creativity"
          width={920}
          height={400}
          priority
        />
      </section>


      {/* Fourth Section */}
      <section className={styles.section}>
        <div className={styles.imageGrid}>
          <Image
            className={styles.image}
            src="/images/image-5.jpeg"
            alt="Primeira Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-6.jpeg"
            alt="Segunda Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-7.jpeg"
            alt="Terceira Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-8.jpeg"
            alt="Quarta Imagem"
            width={450}
            height={500}
            priority
          />
        </div>
      </section>


      {/* Fifth Section */}
      <section className={styles.section}>
        <div className={styles.imageGrid}>
          <Image
            className={styles.image}
            src="/images/image-9.jpeg"
            alt="Primeira Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-10.jpeg"
            alt="Segunda Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-11.jpeg"
            alt="Terceira Imagem"
            width={450}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="/images/image-12.jpeg"
            alt="Quarta Imagem"
            width={450}
            height={500}
            priority
          />
        </div>
      </section>

    </div>
  );
}
