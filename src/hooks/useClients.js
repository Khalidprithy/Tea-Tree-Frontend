import { useEffect, useState } from "react";

const useClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('https://immense-savannah-21225.herokuapp.com/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return [clients, setClients];

}

export default useClients;