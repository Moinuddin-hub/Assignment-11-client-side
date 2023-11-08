import { useLoaderData } from "react-router-dom";


const Manage = () => {
    const manage=useLoaderData();
    console.log(manage);
    return (
        <div>
            <h2>Manage</h2>
        </div>
    );
};

export default Manage;