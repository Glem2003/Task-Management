import { useState } from "react";

const useActiveListId = () => {
    const [activeId, setActiveId] = useState<string | null>('Inbox');

    const handleListClick = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    return { activeId, setActiveId, handleListClick };
}

export default useActiveListId;