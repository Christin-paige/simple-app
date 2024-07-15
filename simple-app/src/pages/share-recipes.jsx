import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import AxiosInstance from '../components/axios';

export default function ShareRecipes() {
  const [recipeData, setRecipeData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    comments: '',
    pic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleFileChange = (e) => {
    setRecipeData({ ...recipeData, pic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', recipeData.name);
      formData.append('ingredients', recipeData.ingredients);
      formData.append('instructions', recipeData.instructions);
      formData.append('comments', recipeData.comments);
      formData.append('pic', recipeData.pic);

      const response = await AxiosInstance.post('/recipe/', formData);

      console.log('data submitted successfully:', response.data);

      setRecipeData({
        name: '',
        ingredients: '',
        instructions: '',
        comments: '',
        pic: null,
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <>
      <h1>Share Your Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="inputName">Recipe Name</Form.Label>
          <Form.Control
            type="text"
            id="inputName"
            name="name"
            value={recipeData.name}
            onChange={handleChange}
            aria-describedby="recipeNameBlock"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="inputIngredients">Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            id="inputIngredients"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            aria-describedby="ingredientsBlock"
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text>Instructions</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="instructions"
            value={recipeData.instructions}
            onChange={handleChange}
            aria-label="With textarea"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Comments</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="comments"
            value={recipeData.comments}
            onChange={handleChange}
            aria-label="With textarea"
          />
        </InputGroup>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a Picture</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Button type="submit" variant="danger">
          Submit Recipe
        </Button>
      </Form>
    </>
  );
}
