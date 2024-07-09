import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import axios from "axios";

const MealPlanning = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [nutritionSummary, setNutritionSummary] = useState(null);

  const fetchMealPlans = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate`,
        {
          params: {
            timeFrame: "day",
            apiKey: "86468b2df7e34289a04d940745305de0", // Replace with your Spoonacular API key
          },
        }
      );

      const meals = response.data.meals.map((meal) => ({
        id: meal.id,
        title: meal.title,
        image: `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`,
        readyInMinutes: meal.readyInMinutes,
        servings: meal.servings,
        sourceUrl: meal.sourceUrl,
      }));

      setMeals(meals);
      setNutritionSummary(response.data.nutrients);
    } catch (error) {
      setError(
        "An error occurred while fetching meal plans. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
    setShowModal(false);
  };

  return (
    <Container className="mt-5 justify-content">
      <h1 className="meal-plan mb-4">Meal Planning</h1>
      <Button variant="primary" onClick={fetchMealPlans} className="mb-4">
        Fetch Meal Plans
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {nutritionSummary && (
        <div className="nutrition-summary mb-4">
          <h2>Nutrition Summary</h2>
          <ul>
            <li>Calories: {nutritionSummary.calories}</li>
            <li>Carbohydrates: {nutritionSummary.carbohydrates} g</li>
            <li>Fat: {nutritionSummary.fat} g</li>
            <li>Protein: {nutritionSummary.protein} g</li>
          </ul>
        </div>
      )}
      <Row>
        {meals.map((meal, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={meal.image} alt={meal.title} />
              <Card.Body>
                <Card.Title>{meal.title}</Card.Title>
                <Card.Text>Ready in {meal.readyInMinutes} minutes</Card.Text>
                <Card.Text>Servings: {meal.servings}</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(meal)}>
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMeal?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMeal && (
            <div>
              <p>Ready in: {selectedMeal.readyInMinutes} minutes</p>
              <p>Servings: {selectedMeal.servings}</p>
              <a
                href={selectedMeal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Recipe
              </a>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MealPlanning;
