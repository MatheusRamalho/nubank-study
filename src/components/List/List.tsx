import { Link } from "react-router-dom";

import { ListItemActionWrapper, ListItemWrapper, ListWrapper } from "./List.styled";
import { ListItemActionProps, ListItemProps, ListProps } from "./List.types";

{/* --------------------------------------------------------------------------
| LIST...
|-------------------------------------------------------------------------- */}
export const List = ({ classe, children, isHorizontal = false }: ListProps) => {
    return (
        <ListWrapper
            className={`${classe} ${isHorizontal ? 'list--horizontal' : ''}`}
        >
            {children}
        </ListWrapper>
    );
}

{/* --------------------------------------------------------------------------
| LIST ITEM...
|-------------------------------------------------------------------------- */}
export const ListItem = ({ children, title, description }: ListItemProps) => {
    return (
        <ListItemWrapper className="list-item">
            <div className="list-item-icon">
                {children}
            </div>

            <div className="list-item-infos">
                {title && <strong> {title} </strong>}
                {description && <p> {description} </p>}
            </div>
        </ListItemWrapper>
    );
}

{/* --------------------------------------------------------------------------
| LIST ITEM ACTION...
|-------------------------------------------------------------------------- */}
export const ListItemAction = ({ name, link, children }: ListItemActionProps) => {
    return (
        <ListItemActionWrapper className="list-item-action">
            <Link
                className="list-item-action-link"
                to={link ? link : '#'}
            >
                {children
                    ? <> {children} {name} </>
                    : <> {name} </>
                }
            </Link>
        </ListItemActionWrapper>
    );
}