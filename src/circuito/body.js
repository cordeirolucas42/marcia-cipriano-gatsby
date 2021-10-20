import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Programacao from "../components/programacao"
import Chamada from "../components/chamada"
import Depoimentos from "../components/depoimentos"

const Body = () => {
    const o_que_e = (
        <section className="bodySection backgroundB">
            <h2>Fale com firmeza em público</h2>
            <p>Essa imersão é uma <strong>oportunidade</strong> para você começar a superar a vergonha de se colocar no centro das atenções, nesse lugar em que todos te olham. Nesse evento, vou te ajudar a ocupar esse espaço de destaque de forma determinada e potente. Te convidando a <strong>experienciar o modo coragem</strong>, se sentindo capaz de se arriscar no palco da vida, se expressando de forma autêntica e natural.</p>
            <p>Eu sei que <strong>o desafio é grande</strong>, mas eu preciso que você confie, seremos parceiros nessa jornada. Eu já vivi essa dor e tenho uma vasta experiência pessoal e profissional para lidar com desafios de forma responsável e afetiva. A metodologia que vou utilizar vai te deixar super à vontade para ativar o seu modo coragem e se arriscar a cada exercício. A proposta nesse trabalho é <strong>elevar a sua autoestima</strong>, liberando a opressão e aflorando em você a <strong>autoaceitação</strong>.</p>
            <p>Que você possa se lançar em <strong>qualquer que seja o palco</strong> que você deseja se manifestar e da forma que você está. <strong>Você já está pronto</strong>, basta saber o que vai falar, não precisa mais esperar!</p>
            <a class="button-small-text btn btn-lg" href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" target="_blank" rel="noreferrer">QUERO ME INSCREVER</a>
        </section>
    )
    
    const para_quem = (
        <section className="bodySection backgroundA">
            <h2>Para quem é destinada essa imersão?</h2>
            <p>Qualquer pessoa que queira trabalhar esse sentimento de incapacidade, de insegurança, de desvalor que gera timidez, nervosismo e vergonha para expressar suas ideias, conhecimentos e sentimentos publicamente, e que esteja aberta para encarar o medo e desenvolver o músculo da coragem.</p>
        </section>
    )
    
    const por_que = (
        <div className="bodySection justify-content-center">
            <div className="porqueSection">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <StaticImage width={1272} height={1272} className="marciaOportunidade" src="../images/oportunidades.JPG" alt="Foto Márcia Cipriano"></StaticImage>
                </div>
                <section className="porqueBlock">
                    <h2>Chega de perder oportunidades!</h2>
                    <p>Já pensou o que poderia estar fazendo ou vivendo se tivesse uma fala mais envolvente, firme e com paixão? <strong>Sem medo de chamar atenção!</strong> Já imaginou o que poderia acontecer, se você <strong>decidir</strong> se comunicar e <strong>expandir a sua voz</strong>?</p>
                    <p>São tantas as situações que deixamos de viver, quer seja na vida pessoal ou profissional, por não termos coragem de nos posicionarmos publicamente. Não importa a situação, profissão, ramo, negócio ou atividade. Essa imersão é para você que <strong>cansou de perder oportunidades</strong> na vida ao sentir <strong>medo</strong> de se manifestar publicamente.</p>
                    <p>O medo que sentimos cria um isolamento assustador, não é mesmo?</p>
                    <p><strong>O que você faria se não se sentisse inseguro?</strong>  E a sua voz, o que ela diria se pudesse falar? Quando encaramos os medos, superamos os nossos limites e assim podemos nos dar conta da grandeza que somos. Não abafe aquilo que quer sair, assuma a sua existência. A sua palavra poderá criar ressonâncias em outros corações. <strong>Se ofereça sem moderação!</strong></p>
                    <p>É preciso reconhecer que dentro de nós existe uma <strong>força poderosa</strong> e transformadora. Mesmo que a sua mente diga para você que você não vai conseguir superar essa dificuldade, não acredite nisso.</p>
                </section>
                <section className="porqueBlock">
                    <h2>O impossível pode acontecer!</h2>
                    <p>Se dê essa chance, e você verá que esse medo do julgamento não vai mais te paralisar. <strong>Aceite o desafio</strong> e você vai descobrir o passo a passo para se lançar no “centro da roda”.</p>
                    <p>Sim, você pode se comunicar livremente. <strong>Expressar</strong> para o mundo o que faz o seu olho brilhar. A fala é uma <strong>ferramenta poderosa</strong> para revelar o seu conhecimento, as suas ideias, e sentimentos. Dizer o seu SIM e o seu NÃO, com assertividade, persuasão, se mostrando ao mundo e gerando conexão.</p>
                    <p>Meu <strong>convite</strong> é para que você solte toda essa potência de vida que mora em você. É isso que eu estou chamando de voz, não é só um conhecimento que você pode transmitir, mas também a forma que sai da sua boca, é diferente, é singular, ela carrega um sentido único.</p>
                    <p>E esse é o <strong>caminho</strong> que vamos percorrer nessa imersão. A partir dessa conexão com você, é que será possível sentir <strong>firmeza</strong> ao falar em público. Cada módulo do curso trará exercícios que funcionarão como ensaios para que você <strong>chame a sua voz</strong>, convide os seus gestos para expandir o seu estilo pessoal, se posicionando naquilo que faz sentido para você.</p>
                </section>
            </div>            
        </div>
    )
    
    const sobre_mim = (
        <section className="bodySection backgroundB">
            <a href="https://linktr.ee/marcia.cipriano">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <StaticImage className="marciaPerfil" src="../images/marcia-perfil.JPG" alt="Foto Márcia Cipriano"></StaticImage>
                <h2>Márcia Cipriano</h2>
            </div>
            </a>            
            <p>Trabalho com educação há mais de 30 anos e caminhei por muitos lugares profissionalmente. Sou licenciada em Filosofia e mestre em Educação, com especialização em Psicopedagogia e em Orientação Profissional.</p>
            <p>São mais de 20 anos atuando como psicóloga. Sou facilitadora de Biodança há quase 10 anos.</p>
            <p>Seja no papel de psicoterapeuta, palestrante, supervisora, mentora, professora ou facilitadora, me encanta este lugar de favorecer ao outro uma vivência consciente e transformadora nos processos de mudança.</p>
            <p>Hoje, sou especialista em fortalecer o músculo da CORAGEM. Afinal, foi necessário que eu alimentasse muito este sentimento para percorrer a minha caminhada. Sempre senti o medo pulsando na estrutura mente-corpo, mas o compromisso com a vida gritou mais alto. Na verdade, era apenas a própria vida ganhando o seu espaço.</p>
        </section>
    )
    
    const grupo_whatsapp = (
        <section className="bodySection backgroundA">
            <div className="precoDiv">
                <h2>Investimento</h2>
                <div className="precoBox">
                    <p className="preco1">Por apenas 12x de</p>
                    <p className="preco2">R$ 40,96</p>
                    <p className="preco3">Ou R$ 396,00 à vista</p>
                </div>
                <div style={{clear:"both"}}></div>
                <a href="https://www.sympla.com.br/fala-voz--encarando-o-medo-de-se-expressar__1293670" className="btn grupoBtn"><span>Inscreva-se pelo Sympla</span></a>
            </div>            
            <h2>Ainda na dúvida?</h2>
            <p>Criamos um grupo exclusivo para quem tem interesse em despertar o músculo da Coragem e começar a falar com firmeza em público. Lá vamos explicar tudo que você precisa, tirar todas as suas dúvidas. E é claro, vai ter uma surpresa e um bônus exclusivo para os integrantes do grupo.</p>
            <a href="https://chat.whatsapp.com/FUHCL3l5VV7LbXLOHTNWot" className="btn grupoBtn"><StaticImage className="iconeGrupo" src="../images/whatsapp.png" alt="Márcia apontando"></StaticImage><span>Junte-se ao grupo</span></a>
        </section>
    )

    return (
        <>
        <Chamada></Chamada>
        {o_que_e}
        {para_quem}
        {por_que}
        <Programacao></Programacao>
        <Depoimentos></Depoimentos>
        {grupo_whatsapp}
        {sobre_mim}
        </>
    )
}

export default Body