import styled from "styled-components";

export const ListWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &.list--horizontal {
        flex-direction: row;
        justify-content: center;
    }
`;

export const ListItemWrapper = styled.li`
    width: 100%;
    margin-bottom: ${props => props.theme.sizes.size32};
    padding: ${props => props.theme.sizes.size8};

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .list-item-infos {
        margin-left: ${props => props.theme.sizes.size16};

        strong {
            display: block;
        }
    }
`;

export const ListItemActionWrapper = styled.li`
    width: 100%;
    margin-bottom: ${props => props.theme.sizes.size12};
    transition: .7s ease;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .list-item-action-link {
        color: ${props => props.theme.colors.secondaryLight};
        transition: .7s ease;

        svg path {
            stroke: ${props => props.theme.colors.whiteLight};
        }
    }

    &:hover {
        .list-item-action-link {
            font-weight: 600;
            color: ${props => props.theme.colors.whiteLight};
        }
    }
`;