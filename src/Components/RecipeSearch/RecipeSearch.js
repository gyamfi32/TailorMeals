import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./RecipeSearch.css";
import Footer from "../Footer/Footer"

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSearchResults([]);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients: searchTerm,
            number: 5,
            apiKey: "86468b2df7e34289a04d940745305de0",
          },
        }
      );

      setSearchResults(response.data);
    } catch (error) {
      setError("An error occurred while fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

   return (
     <div className="container-search card  mt-5">
       <div className="card-header">
         <h1 className="search">Recipe Search</h1>
       </div>
       <div className="card-body">
         <h5 className="search">
           Find recipes that will keep you healthy and are tailored to your
           health needs.
         </h5>
         <Form onSubmit={handleSearch} className="mb-4">
           <Row>
             <Col md={10}>
               <Form.Group controlId="formSearch">
                 <Form.Control
                   type="text"
                   placeholder="Search for recipes by ingredients..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
               </Form.Group>
             </Col>
             <Col md={2}>
               <div className="d-grid gap-2 col-6 mx-auto">
                 <Button
                   type="submit"
                   className="search-btn btn-prmary">
                   Search
                 </Button>
               </div>
             </Col>
           </Row>
         </Form>
       </div>
       <div className="card-footer text-body-secondary">
         {loading && <p>Loading...</p>}
         {error && <p className="text-danger">{error}</p>}
       </div>
       <Container className="mt-4">
         <Row>
           {searchResults.map((result) => (
             <Col md={4} key={result.id} className="mb-4">
               <Card>
                 <Card.Img
                   variant="top"
                   src={result.image}
                   alt={result.title}
                 />
                 <Card.Body>
                   <Card.Title>{result.title}</Card.Title>
                   <Card.Text>
                     Used Ingredients:{" "}
                     {result.usedIngredients
                       .map((ingredients) => ingredients.name)
                       .join(", ")}
                   </Card.Text>
                   <Card.Text>
                     Missed Ingredients:{" "}
                     {result.missedIngredients
                       .map((ingredient) => ingredient.name)
                       .join(", ")}
                   </Card.Text>
                   <Card.Text>
                     <strong>Ingredients Detail</strong>
                     <ul>
                       {result.missedIngredients.map((ingredient) => (
                         <li key={ingredient.id}>
                           {ingredient.original} ({ingredient.aisle})
                         </li>
                       ))}
                     </ul>
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>
           ))}
         </Row>
       </Container>
       <Footer />
     </div>
   );
};

export default RecipeSearch;
