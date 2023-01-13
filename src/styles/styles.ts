import styled, { css } from "styled-components";

// https://getcssscan.com/css-box-shadow-examples
export const boxShadow = {
  type1: css`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  `,
  type3: css`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `,
  type13: css`
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  `,
};

export const FlexCenter = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */

  justify-content: center;
  align-items: center;
`;
