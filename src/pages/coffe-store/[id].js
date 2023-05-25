import { useRouter } from "next/router"; 
import Link from "next/link";


const CoffeStore = () => {
    
    const router = useRouter();
    const { id } = router.query

    console.log('router', router )
    
    return <div> <p>Post: {router.query.id} </p>
    
    <Link href='/coffe-store/{roster.query.id}'> 
     Back home
    </Link> 
    </div>
    
    
};

export default CoffeStore;