import React from 'react'
import { Jobs } from './Jobs/Jobs'
import IMAGES from '../../assets/images/Images'

const Main = () => {
  return (
    <main>
        <section id="index">
        
        </section>
        <section id="aboutme">
            <article>
                <h1>Programador</h1>
                <p>
                Soy un apasionado <strong>Programador</strong> que disfruta desarrollando soluciones de software para diferentes tipos de problemas.
                He estado en contacto con las computadoras desde que tenía 3 años. Entonces, cuando crecí, terminé convirtiéndome en desarrollador de software.
                Puedo desarrollar usando diferentes stacks de tecnologías como LAMP, MEAN, MERN o tecnologías de Microsoft. Para mí, la tecnología es solo una herramienta, una herramienta para implementar las directivas comerciales de alto nivel. Si está buscando un desarrollador de software apasionado, independiente, profesional y orientado al servicio al cliente... Eso es lo que soy. Si está buscando un robot como desarrollador sin pasión, sin creatividad, sin pensamiento lateral... No pierda su tiempo.
                </p>
            </article>
        </section>
        <section id="projects">
            <Jobs/>
        </section>
        <section id="contact">
          <article>
            <h2>Contacto</h2>
            <ul>
              <li>
                  <img src={IMAGES.linkedin} alt="Linkedin" title="Linkedin" height="20px" width="20px"/>
                  <a href="https://www.linkedin.com/in/andr%C3%A9s-valle-lisboa-582ba3256/" target="_blank">Andrés Valle Lisboa</a>
              </li>
              <li>
                  <img src={IMAGES.whatsapp} alt="Whatsapp" title="Whatsapp" height="20px" width="20px"/>
                  <a href="https://wa.link/4yj890" target="_blank">Whatsapp</a>
              </li>
              <li>
                  <img src={IMAGES.mail} alt="GMail" title="GMail" height="20px" width="20px"/>
                  <a href="mailto:avallelisboa@gmail.com" target="_blank">avallelisboa@gmail.com</a>
              </li>
            </ul>
          </article>
        </section>
    </main>
  )
}

export default Main