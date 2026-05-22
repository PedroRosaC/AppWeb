export default function Cadastro() {
    return (
        <div className="p-4 bg-white rounded shadow-sm border-top border-success border-5">
            <h2 className="text-success mb-4"> Cadastro de Novo Aluno</h2>
            <form className="row g-3">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Nome Completo" />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="CPF" />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="RG" />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Endereço" />
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Numero de telefone" />
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-success px-5">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}