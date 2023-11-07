import { useLoaderData } from "react-router-dom";


const Details = () => {
const card=useLoaderData();

console.log(card);
    return (
        <div>
            <h2>Details </h2>
        </div>
    );
};

export default Details;