import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    background: ${props => props.theme.colors.gradient};

    h4 {
        font-weight: 300;
        color: ${props => props.theme.colors.whiteNormal};
    }

    p {
        color: ${props => props.theme.colors.whiteNormal};
    }

    .brand-footer {
        max-width: 96px;
    }

    .container:last-child {
        border-top: 0.063rem solid ${props => props.theme.colors.secondaryLight};
    }

    .list--horizontal {
        .list-item-action {
            .list-item-action-link {
                padding: ${props => props.theme.sizes.size8};
                margin-right: ${props => props.theme.sizes.size8};
                margin-left: ${props => props.theme.sizes.size8};
            }
        }
    }
`;
