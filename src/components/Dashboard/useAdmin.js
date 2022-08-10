import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://pure-cove-10523.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('admin data', data);
                    setAdmin(data.admin);
                })
        }
    }, [user]);
    // console.log('isAdmin adminhook', admin);
    return [admin];
}

export default useAdmin;