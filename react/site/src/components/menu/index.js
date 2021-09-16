import { Container } from './styled'


export default function Index() {
    return (
        <Container>
                     <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src="/assets/images/Vector.png" alt="" /> <img src="/assets/images/DevStore.png" alt="" /></div>
                <div className="devSchool"> <span>Dev</span>School</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/Vector(1).png" alt="" />
            </div>
            <div className="left-box-aluno">
                <div> Alunos </div>
            </div> 
       
        </Container>

)
}
