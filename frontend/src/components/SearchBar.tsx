import { useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface TestProps {
    show: boolean;
}

const Content = styled.div`
  
`;

const Svg = styled.svg`
  margin: 0 0.5rem;
  transition: color 0.3s ease-in-out;
  color: #FFFFFF;
  &:hover {
    color: #FF4545;
  }
`;

const SearchBarDiv = styled.div<TestProps>`
  width: 100%;
  height: 55px;
  background-color: #353535;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 104px;
  z-index: 1000;
`;

const Form = styled.form`

`

const Input = styled.input`
  width: 50%;
  height: 30px;
  background-color: #707070;
  color: white;
  border-radius: 30px;
  border: none;
  outline: none;
  padding: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  &::placeholder {
    color: #FFFFFF;
    opacity: 0.8;
  }
`;

const CloseIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 76%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #FFFFFF;

  &:hover {
    color: #FF4545;
  }
`

function SearchBar() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(event: React.ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
      setSearch(event.target.value)
      navigate(`/results?search=${search}`)
  }

  function handleClick() {
    setShow(!show);
  }


  return (
    <Content>
      <Svg onClick={handleClick} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
      </Svg>
      <SearchBarDiv show={show}>
        <Form onSubmit={handleSearch}>
        <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products"></Input>
        <CloseIcon onClick={handleClick} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18 17.94 6M18 18 6.06 6"/>
        </CloseIcon>
        </Form>
      </SearchBarDiv>
    </Content>
  );
}

export default SearchBar;
