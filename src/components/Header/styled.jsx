import styled from "styled-components";

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
`

const SearchInput = styled.input`
  height: 2.9rem;
  width: 10rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding-left: 1rem;
  border: none;
`

const SearchSelect = styled.select`
  height: 3.1rem;
  border: none;
  width: 7rem;
  background-color: #3A748C;
  padding-left: 0.5rem;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
`

const SearchSubmit = styled.input`
  height: 3rem;
  border: none;
  width: 7rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #df3b57;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    background-color: #ee4b6a;
  transition: ease-in-out 400ms;
  }
`

export {RecipesContainer, SearchContainer, SearchInput, SearchSelect, SearchSubmit}