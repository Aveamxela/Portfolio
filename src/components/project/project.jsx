import ImgProject from '../../assets/image/argent_bank.png'
export default function Project() {
    return (
        <figure class="project">
            <img src={ImgProject} alt="ArgentBank" />
            <div class="overlay">
                <figcaption>
                    <h2 class="title">Argent Bank</h2>
                </figcaption>
                <boutton class="hover">En savoir plus</boutton>
            </div>
        </figure>
    );
}
