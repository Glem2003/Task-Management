import { useState } from "react";

const useFilterState = () => {

    const [value, setValue] = useState("");

    return { value, setValue }

}

export default useFilterState