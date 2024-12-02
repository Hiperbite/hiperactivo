import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Recall = () => {
    const [{ title, content }, setText] = useState<any>(texts[0])
    useEffect(() => {
        setInterval(() => setText(texts[Math.floor(Math.random() * 10)]), 10000)
    }, [])
    return (
        <div className="footer-title-wrap">

            <div data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526bb" className="footer-single-title-wrap">
                <h2 className="footer-title text-mask">{title}. </h2>
                <Link data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526be" to="/request#Request"
                    className="arrow-wrap w-inline-block">
                    <div className="footer-arrow-wrapper">
                        <div className="footer-arrow-wrap">
                            <div className="primary-button-arrow"></div>
                            <div className="primary-button-arrow"></div>
                        </div>
                    </div>
                </Link>
            </div>
            <h5 data-w-id="3297c9b5-6a44-901b-3b7e-898aebb526c1" className="footer-title">
                {content}
            </h5>
        </div>
    )
}

const
    texts = [
        {
            "title": "Proteja o que é seu!",
            "content": "Não deixe sua ideia ou marca desprotegida. Com nosso serviço de registro, você garante exclusividade e reconhecimento legal para o que é seu por direito. Entre em contato hoje mesmo!"
        },
        {
            "title": "Seu valor está na sua criação.",
            "content": "Dê o primeiro passo para proteger sua marca ou invenção! Transforme suas ideias em um patrimônio seguro com o registro de marcas e patentes. Fale conosco agora!"
        },
        {
            "title": "Sua marca, sua identidade.",
            "content": "Garanta que ninguém a use sem autorização. Registre sua marca e conquiste credibilidade no mercado. Estamos aqui para simplificar o processo para você."
        },
        {
            "title": "Inovações merecem proteção!",
            "content": "Sua invenção pode mudar o mundo. Deixe-nos cuidar da segurança legal da sua patente enquanto você foca no futuro. Entre em contato!"
        },
        {
            "title": "Criou algo incrível? Agora é hora de proteger.",
            "content": "Direitos autorais asseguram que ninguém use sua obra sem a sua permissão. Registre conosco e tenha tranquilidade."
        },
        {
            "title": "A originalidade é o seu maior ativo.",
            "content": "Registre sua marca ou ideia com quem entende do assunto. Faça parte de um grupo exclusivo de criadores protegidos pela lei!"
        },
        {
            "title": "O mercado é competitivo. Não deixe sua ideia sem defesa!",
            "content": "Marcas registradas têm mais força e segurança. Comece hoje o processo de registro e fique à frente da concorrência."
        },
        {
            "title": "Sua criação é única, e deve continuar assim.",
            "content": "Garantimos que suas ideias, marcas e obras sejam protegidas da forma certa. Conte conosco para registrar seus direitos!"
        },
        {
            "title": "Transforme sua ideia em um legado.",
            "content": "Com o registro de marcas e patentes, você protege sua criação e expande suas possibilidades no mercado. Faça isso acontecer!"
        },
        {
            "title": "Cada detalhe da sua marca importa.",
            "content": "Não perca tempo: registre-a agora e evite imprevistos. Confie em quem entende de proteção intelectual!"
        }
    ];