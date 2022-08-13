import { useRouter } from 'next/router'

const hoodie = () => {
    const router = useRouter()
    const {slug} = router.query
    
    return <p>hoodie slug is : {slug} </p>
}

export default hoodie