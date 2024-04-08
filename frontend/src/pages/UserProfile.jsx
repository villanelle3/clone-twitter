import { useParams, Link} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { userProfile } from "../api/users"

const UserProfile = () => {
    const { username } = useParams()

    const { data: user, isLoading: loadingUser , isError: isErrorUser } = useQuery({
        queryKey: ['user', username],
        queryFn: () => userProfile(username),
    })

    if (loadingUser ) return <div>Loading...</div>
    if (isErrorUser ) return <div>Error: {isErrorUser.message}</div>

    return (
        <div>
            pagina do perfil da {user.username}
        </div>
    )
}

export default UserProfile;