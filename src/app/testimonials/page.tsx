import styles from './testimonials.module.css';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Ana Souza",
      text: "Matriculamos nosso filho na Crescer e a transformação dele tem sido incrível! Ele está mais seguro, criativo e feliz. A metodologia aplicada é sensacional!",
    },
    {
      name: "Carlos Pereira",
      text: "A Crescer foi a melhor escolha para nosso filho! O ambiente é acolhedor e os profissionais estão sempre atentos ao desenvolvimento de cada criança.",
    },
    {
      name: "Juliana Lima",
      text: "Recomendo a Crescer com certeza! Meu filho adora ir para a escola todos os dias e tem aprendido muito, tanto socialmente quanto academicamente.",
    },
    {
      name: "Fernanda Costa",
      text: "A metodologia adotada na Crescer ajudou muito no desenvolvimento da nossa filha, ela está mais independente e confiante. A escola tem um ambiente incrível!",
    },
    {
      name: "Eduardo Almeida",
      text: "Foi um grande prazer ver meu filho crescer de forma tão bonita e natural. A escola estimula a criatividade e o pensamento crítico, coisas que são muito importantes para o futuro dele.",
    },
    {
      name: "Beatriz Rocha",
      text: "A Crescer é uma escola de excelência. A interação com a natureza e a pedagogia utilizada são fatores determinantes para o desenvolvimento das crianças.",
    },
    {
      name: "João Santos",
      text: "Estou muito feliz com a evolução do meu filho. Ele aprendeu muito e cresceu emocionalmente. A escola tem um ambiente seguro e muito acolhedor.",
    },
    {
      name: "Mariana Oliveira",
      text: "Escolhemos a Crescer para nossa filha e não nos arrependemos. A metodologia focada no desenvolvimento integral faz toda a diferença no processo de aprendizagem.",
    },
    {
      name: "Ricardo Silva",
      text: "Meu filho sempre foi tímido, mas depois que entrou na Crescer, ele ficou muito mais confiante e sociável. A escola é excelente!",
    },
    {
      name: "Patrícia Mendes",
      text: "A educação que a Crescer proporciona vai além do acadêmico, é uma escola que se preocupa com o emocional e social da criança. Amei a experiência da minha filha lá.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Testemunhos dos Pais</h1>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonial} key={index}>
            <p className={styles.text}>{testimonial.text}</p>
            <h3 className={styles.name}>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
