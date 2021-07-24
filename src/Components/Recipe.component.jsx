import styled from "styled-components";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import React, { useState } from "react";
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px #aaa;
`;
export const CoverImage = styled.img`
  height: 200px;
  object-fit :cover;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  border: 1px solid green;
  color: black;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
`;
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: 1px solid #eb3300;
`;
export const SeeNewTab = styled(IngredientsText)`
  color: green;
  border: 1px solid green;
`;
const RecipeComponent = (props) => {
  const { recipeObj } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open}>
        <DialogTitle id="form-dialog-title">Ingridients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingObj) => (
                <tr>
                  <td>{ingObj.text}</td>
                  <td>{ingObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeMoreText onClick={() => {
            setOpen(false)
          }}>
          Close
          </SeeMoreText>
          <SeeNewTab  onClick={() => {
            window.open(recipeObj.url);
          }}>See More
          </SeeNewTab>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} alt="" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText
          onClick={() => {
            setOpen(true);
          }}
        >
          Ingridients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};
export default RecipeComponent;
