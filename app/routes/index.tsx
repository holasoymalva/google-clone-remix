import { Link } from "@remix-run/react";
import logo from './source/hoodi-logo.png';
import perfil from './source/hoodi-perfil.jpeg';
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      <header className="menu">
        <a href="" className="menu-item">hoddy mail</a>
        <a href="" className="menu-item">imagenes</a>
        <div className="material-icons menu-item">
            <span className="material-icons-outlined">apps</span>
        </div>
        <img src={perfil} alt="" className="icon-perfil menu-item"/>
    </header>
    <main>
        <div className="centrar">
            <img src={logo} alt="" className="logo"/>
            <div className="barra_busqueda">
                <div className="material-icons icon">
                    <span className="materal-icons-outlined">
                        search
                    </span>
                </div>
                <input type="text"/>
                <div className="material-icons icon">
                    <span className="materal-icons-outlined">
                        mic
                    </span>
                </div>
            </div>
            <div id="opciones-busqueda">
                <button>Buscar en Hoddy</button>
                <button>Buscar en otro lado</button>
            </div>
            <p> Ofrecido por Hoddy en : <a href="">English</a></p>
        </div>
    </main>
    </div>
  );
}
