import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

export default function EnterButton() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    

    return (
        <div className="nav-button-wrap">

            <a data-w-id="485448ee-14e0-33bd-3392-7f8b14636bdc" href={isAuthenticated ? "/my/dashboard" : "/login"}
                className="transparent-button w-inline-block">
                <div>{isAuthenticated ? 'Meu perfil' : 'Entrar'}</div>
                <div className="button-arrow-wrap">
                    <img src="/img/640eea100bae187723eb77de_button-arrow-white.svg" loading="lazy" alt="Right Arrow" className="primary-arrow" />
                    <img src="/img/640eea960dce3ca0fd70d87c_button-arrow-orange.svg" loading="lazy" alt="Arrow" className="secondary-arrow" /></div>
            </a>

        </div>
    )
}
