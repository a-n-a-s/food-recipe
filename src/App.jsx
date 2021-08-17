import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import {
  Header,
  AppName,
  SearchName,
  SearchInput,
  Logo,
} from "./Components/Header.component";
import { RecipeListContainer } from "./Components/Recipe.component";
import RecipeComponent from "./Components/Recipe.component";
import axios from "axios";

const APP_ID = "ffae52c0";
const APP_KEY = "93acd21f812cfea10f142eecd4db80c0	";
const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Placeholder = styled.img`
  height:120px;
  width:120px;
  opacity:0.7;
`
function App() {
  const [timeOutId, setTimeOutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(response);
    setRecipeList(response.data.hits);
  };
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    const Timeout = setTimeout(() => {
      fetchRecipe(event.target.value);
    }, 1500);
    setTimeOutId(Timeout);
  };
  return (
    <Conatainer>
      <Header>
        <AppName>
          <Logo src="https://www.svgrepo.com/show/287733/burger.svg" />
          Recipe Finder
        </AppName>
        <SearchName>
          <BiSearch style={{ color: "black", width: "28px", height: "28px" }} />
          <SearchInput placeholder="Search Recipe " onChange={onTextChange} />
        </SearchName>
      </Header>
      <RecipeListContainer>
        {recipeList.length ?
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          )) : <Placeholder src = "https://www.svgrepo.com/show/287733/burger.svg"/>}
      </RecipeListContainer>
    </Conatainer>
  );
}

export default App;
