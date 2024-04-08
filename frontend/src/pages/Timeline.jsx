import { logout } from "../api/users";

const Timeline = () => {
    return (
        <div>pagina inicial

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Timeline;
