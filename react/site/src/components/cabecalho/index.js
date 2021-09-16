import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-user"> 
                    <div class="user-image">
                        <img src="/assets/images/Ellipse.png" alt="" />
                        <div class="absolute">3</div>
                    </div>
                    <div class="user-name"> Olá, <b>Bruno de Oliveira</b> </div>
                </div>
                
                <div class="box-image">
                    <div class="refresh-button"> <button> <img src="/assets/images/Vector(2)" alt = "" />  </button> </div>
                    <div class="left-button"> <button> <img src="/assets/images/" alt = "" />  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>

    )
}