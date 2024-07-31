//style
import "./style/list.css";

interface ListProps {
    text: string
    className?: string
    images?: React.ReactNode
    handleListClick?: () => void
    element?: React.ReactNode
    elementClass?: string
    childList?: string[]
    childListClass?: string
}

const List: React.FC<ListProps> = (props) => {

    const {
        images,
        text,
        className,
        handleListClick,
        element,
        elementClass,
        childList,
        childListClass
    } = props

    const listClass = className ? `list ${className}` : 'list'
    const elementClassName = elementClass ? `list__element ${elementClass}` : 'list__element'
    const childListClassName = childListClass ? `list__childList ${childListClass}` : 'list__childList'

    return (
        <div className={listClass} onClick={handleListClick}>

            <div className="list__head">
                <div className="list__title">
                    {images}
                    <p>{text}</p>
                </div>
                {element && (
                    <span className={elementClassName}>{element}</span>
                )}
            </div>

            {childList && (
                <div className={childListClassName}>
                    {childList && childList.map((list, index) => (
                        <p key={index}>{list}</p>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default List;