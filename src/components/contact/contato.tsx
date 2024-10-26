import { Mail, MapPin, Phone, } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
        <section className='w-screen m-2 flex flex-wrap'>
            <div className='w-1/2 p-2 bg-zinc-200'>
                <h2 className='text-blue-800'>Contato</h2>
                    <ul> 
                        <Mail></Mail><li>Teste@gmail.com</li>
                        <Phone></Phone><li>Celular: (11) 94002-8922</li>
                        <MapPin></MapPin><li>Endereço: Casa do caralho número 666 - São Paulo - SBC</li>
                    </ul>
            </div>

            <div className='w-px h-full bg-zinc-800 mx-4'> </div>

            <div className='w-full bg-zinc-200'>
                <h2 className='text-blue-800'>Deixe sua mensagem</h2>
                <form className='flex flex-col'>
                    <input className='p-2 sticky top-0' type="text" id="nome" placeholder="Seu nome" required /> <br />
                    <input className='p-2 sticky top-0' type="email" id="email" placeholder="Seu email" required /> <br />
                    <textarea className='p-2 sticky top-0' id="mensagem" placeholder="Sua mensagem" required></textarea>
                    <button className='w-0' type="submit">Enviar</button>
                </form>
            </div>
        </section>
  );
};

export default Contact;