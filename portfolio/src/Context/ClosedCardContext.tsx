import React, { createContext, useState } from "react";

interface ClosedContextType {
    closed: boolean;
    toggleClosed: (value:boolean) => void;
}

const ClosedContext = createContext<ClosedContextType | null>(null);


const ClosedProvider = ({ children }: { children: React.ReactNode }) => {


    const [closed, setClosed] = useState<boolean>(false);

    const toggleClosed = (value: boolean) => {
        setClosed(value);

    };

    return (
        <ClosedContext.Provider value={{ closed, toggleClosed }}>
            {children}
        </ClosedContext.Provider>
    );
};

export { ClosedProvider, ClosedContext };
