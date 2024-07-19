//style
import "./style/list.css";

interface ListProps {
    text: string
    className?: string
    images?: React.ReactNode
    handleListClick?: () => void
    children?: React.ReactNode
}

const List: React.FC<ListProps> = (props) => {

    const {
        images,
        text,
        className,
        handleListClick,
        children
    } = props

    return (
        <div className={`list ${className}`} onClick={handleListClick}>
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