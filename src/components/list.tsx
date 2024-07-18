//style
import "./style/list.css";

interface ListProps {
    text: string
    images?: React.ReactNode
    children?: React.ReactNode
}

const List: React.FC<ListProps> = (props) => {

    const {
        images,
        text,
        children
    } = props

    return (
        <div className="list">
            <div className="list__title">
                <div>
                    {images}
                </div>
                <p>{text}</p>
            </div>
            {children}
        </div>
    )
}

export default List;