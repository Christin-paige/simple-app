
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AxiosInstance from '../components/axios';



export default function BrowseRecipes(){

    const [recipes, setRecipes] = useState([]);
   
useEffect(() => {
    AxiosInstance.get('/recipe/')
    .then(response => {
        console.log(response.data)
        setRecipes(response.data);
    })
    .catch(error=>{
        console.error(error);
    });
},[])



   
return(
    <><div>
    <h1>Browse Recipes</h1>
    <Container className="card-container">
        <Row>
            {recipes.map((recipe, index) => (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <Card className="card-body" style={{width: '18rem' }}>
                                <Card.Img 
                                variant="top" 
                                src={recipe.pic} 
                                alt={recipe.name}
                              
                                 />
                      <Card.Body>
                        <Card.Title className="text-center">{recipe.name}</Card.Title>
                        <Card.Text className="text-center"><strong>Ingredients: </strong>{recipe.ingredients}</Card.Text>
                        <Card.Text className="text-center"><strong>Instructions: </strong>{recipe.instructions}</Card.Text>
                        <Card.Text className="text-center">{recipe.comments}</Card.Text>
                      </Card.Body>
                        </Card>
                        </Col>
                    ))}
        </Row>

    </Container>

    </div>

    </>
) ;   
}