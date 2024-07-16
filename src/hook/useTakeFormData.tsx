import { useState } from "react";

const useTakeFormData = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return { title, description, setTitle, setDescription }
}

export default useTakeFormData;