import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Title>Hello</Title>
      <a href="/subway">Subway</a>
    </>
  );
}
