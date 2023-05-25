import { useRouter } from "next/router"; 
import Head from "next/head";

const dynamicname = ()  => {
const router = useRouter();
console.log('name', router)

return (

    <div>
        <Head>
        <title>{router.query.name}</title>
         
        </Head>

        


    </div>

)

}

export default dynamicname;