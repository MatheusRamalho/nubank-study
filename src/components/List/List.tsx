import { ListItemWrapper, ListWrapper } from "./List.styled";
import { ListItemProps, ListProps } from "./List.types";

export const List = ({ children }: ListProps) => {
    return (
        <ListWrapper> {children} </ListWrapper>
    );
}

export const ListItem = ({ children, title, description }: ListItemProps) => {
    return (
        <ListItemWrapper className="list-item">
            <div className="list-item-icon">
                {children}
            </div>

            <div className="list-item-infos">
                {title && <strong> {title} </strong> }
                {description && <p> {description} </p> }
            </div>
        </ListItemWrapper>
    );
}