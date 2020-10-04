import tw from 'twin.macro'
import styled from 'styled-components'
import { BREAKPOINTS } from '../../../Constants'

export const StyledItemContainer = styled.div`
  ${tw`  
    flex
    justify-center
  `}
  & > div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    left: 90%;
    position: absolute;
    top: 0;
    @media (min-width: ${BREAKPOINTS.md}) {
      left: 95%;
    }
    & svg {
      &:hover {
        fill: #90cdf4;
      }
    }
    & span {
      outline: 0;
    }
  }
`
