import React from 'react';
import { createExportDefault } from 'typescript';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem()  {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61425683?s=460&u=35ea46d61b459b33f433f2207636d15044bb2afe&v=4" alt="Arthur Esteves"/>
                <div>
                    <strong>Arthur Esteves</strong>
                    <span>Português</span>
                </div>
            </header>
            <p>
            Computer engineering student at UNIVESP and system development student at ETEC.
            <br/><br/>
            Let’s get coding. Learn. Grow up.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong> R$ 60,00 </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;