export default function CadastroProfessor() {
    return (
        <div className="p-4 bg-white rounded shadow-sm border-top border-success border-5">
            <div className="formulario">
                <h2 className="text-success mb-4"> Cadastro de Novo Professor</h2>
                <br/>
                <form className="row g-3">
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Nome Completo" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Área de atuação" />
                    </div>

                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="CPF" />
                    </div>
                    <div className="col-12">
                        <input type="email" className="form-control" placeholder="E-Mail" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Numero de telefone" />
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="btn btn-success px-5">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}