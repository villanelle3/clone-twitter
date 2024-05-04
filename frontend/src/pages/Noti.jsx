import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getNoti, mark } from "../api/noti"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Noti = () => {

    const queryClient = useQueryClient()

    const markMutation = useMutation({
        mutationFn: mark,
        onSuccess: () => {
        queryClient.invalidateQueries("noti")
        },
        onError: (error) => {
        toast.error(error.message)
        }
    })

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["noti"],
        queryFn: getNoti,
    })

    useEffect(() => {
        markMutation.mutate()
    }, [])


    if (isLoading) return <div>Loading...</div>
    if (isError) return toast.error(error.message)

    return (
        <div>

        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-start gap-3">

            <div>
                <div className="flex flex-row items-center gap-2">
                <p className="text-white font-semibold text-xl">
                    All Notifications
                </p>
                </div>
            </div>

            </div>
        </div>

        {data?.map((t) => (
            <div key={t.id}>
                <div key={t.id} className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
                <div className="flex flex-row items-start gap-3">

                    <img className="h-11 w-11 rounded-full" src={`http://127.0.0.1:8000${t.avatar}`} />

                    <div>
                    <div className="flex flex-row items-center gap-2">

                        <p className="text-white font-semibold cursor-pointer hover:underline">
                        <Link to={`${t.user}`}>
                        @{t.from_user}
                        </Link>
                        </p>

                        <span className="text-neutral-500 text-sm">

                        {new Date(t.created_at).toDateString().slice(4)}
                        </span>

                    </div>


                    <div className="text-white mt-1 text-start">
                        {t.type}
                    </div>


                    </div>

                </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Noti