import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import "./NutritionalInfo.css"







const NutritionalInfo = () => {
  const [query, setQuery] = useState("");
  const [nutritionalInfo, setNutritionalInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Access the API key
  // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNutritionalInfo(null);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query,
            addRecipeNutrition: true,
            number: 5, // Adjust this number to get more results
            apiKey: "86468b2df7e34289a04d940745305de0", // Replace with your Spoonacular API key
          },
        }
      );
      if (response.data.results.length > 0) {
        setNutritionalInfo(response.data.results[0].nutrition);
      } else {
        setError("No nutritional information found for the given meal.");
      }
    } catch (error) {
      setError(
        "An error occurred while fetching nutritional information. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nutritional-info-container">
      <Container>
        <h1 className="nutrition mb-4">Nutritional Information</h1>
        <Card className="nutritional-info-card p-4">
          <Form onSubmit={handleSearch}>
            <Form.Group
              as={Row}
              className="cutritional-info-form-group"
              controlId="formSearch"
            >
              <Form.Label column sm={2} className="nutritional-info-form-label">
                Search Meal Info
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Enter meal name"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </Col>
              <Col sm={2}>
                <Button
                  variant="primary"
                  type="submit"
                  className="nutritional-info-button"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Search"
                  )}
                </Button>
              </Col>
            </Form.Group>
          </Form>
          {error && <p className="text-danger">{error}</p>}
        </Card>
        {nutritionalInfo && (
          <Card className="nutritional-info-card mt-4">
            <Card.Body className="nutritional-info-card-body">
              <Card.Title className="nutritional-info-card-title">
                Nutritional Information
              </Card.Title>
              <Row>
                <Col>
                  <p>
                    Calories:{" "}
                    {
                      nutritionalInfo.nutrients.find(
                        (n) => n.name === "Calories"
                      ).amount
                    }
                  </p>
                  <p>
                    Protein:{" "}
                    {
                      nutritionalInfo.nutrients.find(
                        (n) => n.name === "Protein"
                      ).amount
                    }
                    g
                  </p>
                  <p>
                    Fat:{" "}
                    {
                      nutritionalInfo.nutrients.find((n) => n.name === "Fat")
                        .amount
                    }
                    g
                  </p>
                  <p>
                    Carbohydrates:{" "}
                    {
                      nutritionalInfo.nutrients.find(
                        (n) => n.name === "Carbohydrates"
                      ).amount
                    }
                    g
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default NutritionalInfo;
