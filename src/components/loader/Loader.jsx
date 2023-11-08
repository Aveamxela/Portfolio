// import Logo from "../../assets/image/logo.svg"

export default function Loader() {
    return (
        <div className="loader">
            <svg
                id="Calque_2"
                data-name="Calque 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 99.36 77.95"
                className="svg-animation"
            >
                {/* Barre A */}
                <polygon
                    className="line-A"
                    points="44.53 76.63 52.51 76.63 25.27 0 21.02 10.85 36.46 54.04 44.53 76.63"
                />
                {/* Courbe A */}
                <path
                    className="round-line-A"
                    d="M24.45,86,38.1,68.65l-.42-1.17S33.74,72.6,26.83,81.09c-9,8.61-15.74,4.53-15.74,4.53s-9.53-4-4.6-17.39L23.22,27l-.56-1.58S8.09,61.11,4.13,71.51C-.53,81.79,2.79,86.89,2.79,86.89S4.26,92,11.28,92.52,24.45,86,24.45,86Z"
                    transform="translate(-1.64 -14.61)"
                />
                {/* Gros tracé X */}
                <polygon
                    className="big-line-X"
                    points="99.36 0.32 90.6 0.32 49.53 68.48 52.51 76.63 52.93 76.63 56.85 69.59 99.36 0.32"
                />
                {/* Petit tracé X */}
                <polygon
                    className="small-line-X"
                    points="49.15 0.32 47.42 0.32 96.83 76.62 98.52 76.62 49.15 0.32"
                />
            </svg>
        </div>
    );
}
