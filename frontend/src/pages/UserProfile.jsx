import { useParams, Link} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { userProfile } from "../api/users"

const UserProfile = () => {
    const { username } = useParams()
    return (
        <div>
            pagina do perfil da {username}
        </div>
    )
}

export default UserProfile;