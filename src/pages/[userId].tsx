import { User } from "@/types/User";
import axios from "axios";
import { GetServerSideProps } from "next";

interface UserDetailProps {
    user: User
}

const UserDetail : React.FC<UserDetailProps> = ({user}) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const {userId} = context.params!;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`) 
    return {
        props: {
            user: response.data
        }
    }
}

export default UserDetail;