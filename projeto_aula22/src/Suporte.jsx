export default function Suporte() {
    return (
        <div className="p-4 bg-white rounded shadow-sm border-start border-primary border-5">
            <h2 className="text-primary mb-3"> Central de Suporte</h2>
            <textarea className="form-control mb-3" rows="5" placeholder="Descreva o
        problema..."></textarea>
            <button type="button" className="btn btn-primary w-100">Abrir Chamado</button>
        </div>
    );
}