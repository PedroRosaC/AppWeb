
export default function Contato() {
    return (
        <section>
            <div className="father">
                <div className="firstSon">
                    <h1>Contato</h1>
                    <p>Endereço: Rua Planeta Terra - Bairro Via Lactea </p>
                    <p> Email: UniCauduro@UC.edu.br</p>
                    <p>Telefone: (55) 55 99999-9999</p>

                    <div className="formulario">
                        <form className="row g-3">
                            <div className="col-12">
                                <textarea placeholder="Enviar um Comentário" name="" id="">Enviar um comentário</textarea>
                            </div>
                            <div className="col-12 text-end">
                                <button type="submit" className="btn btn-success px-5">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="secondSon">
                    <img src="img/fachada.png" className="image" alt="" />
                </div>

            </div>
        </section>
    );
}