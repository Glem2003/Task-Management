import { useState } from "react";

const useFilterState = () => {

    const [value, setValue] = useState<string[]>([]);

    return { value, setValue }

}

export default useFilterState