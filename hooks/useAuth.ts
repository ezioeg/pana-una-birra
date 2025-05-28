import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const user = getAuth().currentUser;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return {
        user,
        loading,
    };
};
