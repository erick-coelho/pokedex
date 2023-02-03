import { Link } from "react-router-dom"

const NotFound = () => {
    return (
            <>
                <h2>
                    404 Not Found
                </h2>
                <h6>
                    <Link to={"/"}>
                        Redirecionar para home !
                    </Link>
                </h6>
            </>
    )
}; export default NotFound;