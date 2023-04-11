import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useService = (serviceFactory) => {
    const { token } = useContext(UserContext);

    const service = serviceFactory(token);

    return service;
};