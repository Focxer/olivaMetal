import React from 'react'

function Main() {
  return (
    <main className='md:w-2/3 w-full p-8 m-6'>
        <section>
            <div>
                <div>
                    <h2 className='text-blue-600'>Serviços</h2>
                    <p className='text-zinc-800'>
                        Oferecemos uma ampla gama de serviços, incluindo corte e dobra de metais, soldagem,
                        fabricação de peças sob medida, e muito mais. Nosso objetivo é entregar qualidade e precisão
                        em cada projeto.
                    </p>
                    <ul className=''>
                        <li>Corte e dobra de metais</li>
                        <li>Soldagem</li>
                        <li>Fabricação de peças sob medida</li>
                        <li>Consultoria técnica especializada</li>
                    </ul>
                </div>
                <div>
                    <img />
                </div>
            </div>
        </section>

        <section>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <h2>Sobre Nós</h2>
                    <p>
                        A Oliva Metal é uma empresa dedicada à fabricação e personalização de metais para diversos
                        setores. Com mais de 20 anos de experiência no mercado, nos destacamos pela excelência
                        no atendimento e na qualidade de nossos produtos.
                    </p>
                    <p>
                        Nosso compromisso é com a inovação e a precisão, oferecendo soluções sob medida para
                        cada cliente, garantindo a máxima satisfação em todos os projetos.
                    </p>
                </div>
            </div>
        </section>

        <div>
            <h2>Contato</h2>
            <form>
                <input type="text" id="nome" placeholder="Seu nome" required />
                <input type="email" id="email" placeholder="Seu email" required />
                <textarea id="mensagem" placeholder="Sua mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
      </main>
  )
}

export default Main
