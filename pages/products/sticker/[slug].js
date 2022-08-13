import { useRouter } from "next/router"

const sticker = () => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div>sticker slug is : {slug} </div>
    )
}

export default sticker