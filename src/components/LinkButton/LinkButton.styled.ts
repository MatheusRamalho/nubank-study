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

    &.link-button--tertiary,
    &.link-button--quaternary {
        padding: 0;
        background: transparent;
        box-shadow: none;
        color: ${props => props.theme.colors.blackNormal};
    }

    &.link-button--quaternary {
        position: relative;

        display: inline-block;

        padding: ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size16} ${props => props.theme.sizes.size40};
        background-image: url("../../../src/assets/svgs/icon/icon-arrow.svg");
        background-repeat: no-repeat;
        background-position: 0% 50%;

        font-size: ${props => props.theme.sizes.size18};
        color: ${props => props.theme.colors.primaryNormal};

        &::before {
            content: '';
            position: absolute;
            top: 75%;
            left: 56px;

            width: 0%;
            height: ${props => props.theme.sizes.size2};
            border-radius: ${props => props.theme.sizes.size2};
            background-color: ${props => props.theme.colors.secondaryLight};
            transition: .5s ease;
        }
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &:not(:disabled, .link-button--tertiary, .link-button--quaternary):hover {
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: ${props => props.theme.shadows.purple2};
    }

    &:not(:disabled).link-button--tertiary:hover {
        cursor: pointer;
        opacity: .9;
        color: ${props => props.theme.colors.primaryNormal};
    }

    &:not(:disabled).link-button--quaternary:hover {
        cursor: pointer;
        opacity: .9;
        color: ${props => props.theme.colors.primaryNormal};
    }
`;