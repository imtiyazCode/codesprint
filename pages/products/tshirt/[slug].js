import { useRouter } from "next/router"

const tshirt = () => {
    const router = useRouter()
    const {slug} = router.query
    
    return (
        <div>tshirt slug is : {slug} </div>
    )
}

export default tshirt