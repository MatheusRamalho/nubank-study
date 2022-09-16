import styled from "styled-components";

export const ButtonWrapper = styled.button`
    margin: ${props => props.theme.sizes.size6};
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size32};
    border: none;
    border-radius: ${props => props.theme.sizes.size16};
    background: ${props => props.theme.colors.gradient};
    color: ${props => props.theme.colors.whiteLight};
    box-shadow: ${props => props.theme.shadows.purple1};
    transition: .5 ease;

    display: flex;
    align-items: center;
    justify-content: center;

    &.button--secondary {
        color: ${props => props.theme.colors.blackNormal};
        background: ${props => props.theme.colors.whiteLight};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:not(:disabled):hover {
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: ${props => props.theme.shadows.purple2};
    }

    &:not(:disabled).button--secondary:hover {
        cursor: pointer;
        opacity: .9;
    }
`;

export const LinkButtonWrapper = styled(ButtonWrapper)`
    text-decoration: none;

    a {
        color: ${props => props.theme.colors.whiteNormal};
    }

    &.button--secondary a {
        color: ${props => props.theme.colors.blackNormal};
    }
`;