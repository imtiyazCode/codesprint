import { useRouter } from "next/router"

const mug = () => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div>mug slug is : {slug} </div>
    )
}

export default mug