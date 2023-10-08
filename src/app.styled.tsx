import styled from 'styled-components'

export const BgImageContainer = styled.div`
  position: absolute;
  isolation: isolate;
  top: 0;
  z-index: -1;
  width: 100%;
  min-height: clamp(12.5rem, 11.186vw + 5.327rem, 18.75rem);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--bg-gradient-fallback);
    background: var(--bg-gradient);
  }
`

export const MainStyled = styled.main`
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: 1.5rem;
  padding-top: var(--m-top);
`

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    text-transform: uppercase;
  }
`

export const TodoSectionStyled = styled.section`
  margin-top: 40px;
  
  @media (min-width: 768px) {
    margin-top: 48px;
  }
`

export const ParagraphStyled = styled.p`
  padding: 2rem;
  text-align: center;
  margin-top: calc(50px - 2rem);
`
