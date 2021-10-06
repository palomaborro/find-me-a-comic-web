import { useAuth } from "../../hooks/useAuth";
import './MyCollection.css'
import Loader from "react-loader-spinner";
import ListForm from "../../listForm/ListForm";

export default function MyCollection() {
    const { user } = useAuth();

    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };

    if (!user) {
        return (
            <Loader
            style={style}
            type="TailSpin"
            color="#000000"
            secondaryColor="Grey"
            height={80}
            width={80}
          />)
      }

    return (
        <div className='MyCollection'>
            <img
                src={user.image}
                alt=""
            />
            <p>{user.name}</p>

            <h2>Create a list</h2>
            <ListForm />
        </div>
    )
}