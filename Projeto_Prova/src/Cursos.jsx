

export default function Cursos() {
    return (
        <section>

            <h1>Nossos Cursos</h1>
            <br />
            <div className="father">
                <div className="firstSon">
                    <h1>Ciências da Computação</h1>
                    <p>O curso de Ciências da Computação prepara os estudantes para desenvolver softwares, sistemas inteligentes e soluções tecnológicas inovadoras. Durante a graduação, serão estudados algoritmos, programação, inteligência artificial, banco de dados, redes de computadores e segurança digital, além do desenvolvimento de projetos práticos voltados para o mercado de tecnologia.</p>
                
                </div>
                <div className="secondSon">
                    <img src="img/CC.jpg" className="image" alt="" />
                </div>
            </div>
            
            <div className="father">
                <div className="firstSon">
                    <h1>Sistemas de Informação</h1>
                    <p>O curso de Sistemas de Informação forma profissionais capazes de integrar tecnologia e gestão dentro das empresas. Os alunos aprenderão sobre desenvolvimento de sistemas, banco de dados, análise de negócios, engenharia de software, redes e administração de projetos, utilizando a tecnologia para melhorar processos e tomadas de decisão organizacionais.</p>
                
                </div>
                <div className="secondSon">
                    <img src="img/SI.jpeg" className="image" alt="" />
                </div>
            </div>
            <div className="father">
                <div className="firstSon">
                    <h1>Medicina</h1>
                    <p>O curso de Medicina oferece uma formação completa voltada ao cuidado da saúde humana. Os estudantes terão contato com disciplinas como anatomia, fisiologia, farmacologia, diagnóstico clínico e práticas hospitalares, desenvolvendo conhecimentos científicos e habilidades humanas fundamentais para a prevenção, diagnóstico e tratamento de doenças.</p>
                
                </div>
                <div className="secondSon">
                    <img src="img/Medicina.jpg" className="image" alt="" />
                </div>
            </div>
            <div className="father">
                <div className="firstSon">
                    <h1>Biologia</h1>
                    <p>O curso de Biologia proporciona o estudo dos seres vivos, do meio ambiente e dos processos naturais que sustentam a vida. Os alunos aprenderão sobre genética, ecologia, microbiologia, zoologia, botânica e conservação ambiental, participando de atividades laboratoriais e pesquisas científicas voltadas à preservação da biodiversidade e ao avanço da ciência.</p>
                    
                
                </div>
                <div className="secondSon">
                    <img src="img/bio.jpeg" className="image" alt="" />
                </div>
            </div>
        </section>
    );
}