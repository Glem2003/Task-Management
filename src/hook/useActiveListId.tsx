import { useState } from "react";

const useActiveListId = () => {

    const [activeId, setActiveId] = useState<string | null>('Inbox');
    const [openListId, setOpenListId] = useState<string[]>([]);

    const handleListClick = (id: string) => {
        setActiveId(id);
    };

    const handleListOpen = (id: string) => {
        setOpenListId((prev) =>
            prev.includes(id) ? prev.filter((openListId) => openListId !== id) : [...prev, id]
        );
    };

    return {
        activeId,
        setActiveId,
        handleListClick,
        handleListOpen,
        openListId,
        setOpenListId
    };
}

export default useActiveListId;