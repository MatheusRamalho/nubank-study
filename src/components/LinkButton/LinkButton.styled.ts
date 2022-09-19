import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButtonWrapper = styled(Link)`
    width: fit-content;
    /* margin: ${props => props.theme.sizes.size6}; */
    padding: ${props => props.theme.sizes.size12} ${props => props.theme.sizes.size32};
    border: none;
    border-radius: ${props => props.theme.sizes.size16};
    background: ${props => props.theme.colors.gradient};
    box-shadow: ${props => props.theme.shadows.purple1};
    /* color: ${props => props.theme.colors.whiteLight}; */
    color: ${props => props.theme.colors.whiteNormal};
    text-decoration: none;
    transition: .5 ease;

    display: flex;
    align-items: center;
    justify-content: center;

    &.link-button--secondary {
        background: ${props => props.theme.colors.whiteLight};
        color: ${props => props.theme.colors.blackNormal};
    }

    &.link-button--tertiary {
        padding: 0;
        background: transparent;
        box-shadow: none;
        color: ${props => props.theme.colors.blackNormal};
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