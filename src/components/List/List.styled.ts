import styled from "styled-components";

export const ListWrapper = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
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