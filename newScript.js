document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the recommendation text and author from the form
    const recommendationText = document.getElementById('recommendation-text').value;
    const recommendationAuthor = document.getElementById('recommendation-author').value;

    // Create a new recommendation card
    const newRecommendationCard = document.createElement('div');
    newRecommendationCard.className = 'recommendation-card';

    const newRecommendationText = document.createElement('p');
    newRecommendationText.textContent = `"${recommendationText}"`;

    const newRecommendationAuthor = document.createElement('h4');
    newRecommendationAuthor.textContent = `- ${recommendationAuthor}`;

    // Append text and author to the new card
    newRecommendationCard.appendChild(newRecommendationText);
    newRecommendationCard.appendChild(newRecommendationAuthor);

    // Add the new card to the recommendations container
    document.querySelector('.recommendations-container').appendChild(newRecommendationCard);

    // Clear the form fields
    document.getElementById('recommendation-text').value = '';
    document.getElementById('recommendation-author').value = '';

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 3000);
});


document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the recommendation text and author from the form
    const recommendationText = document.getElementById('recommendation-text').value;
    const recommendationAuthor = document.getElementById('recommendation-author').value;

    // Create a new recommendation card
    const newRecommendationCard = document.createElement('div');
    newRecommendationCard.className = 'recommendation-card';

    const newRecommendationText = document.createElement('p');
    newRecommendationText.textContent = `"${recommendationText}"`;

    const newRecommendationAuthor = document.createElement('h4');
    newRecommendationAuthor.textContent = `- ${recommendationAuthor}`;

    // Append text and author to the new card
    newRecommendationCard.appendChild(newRecommendationText);
    newRecommendationCard.appendChild(newRecommendationAuthor);

    // Add the new card to the recommendations container
    document.querySelector('.recommendations-container').appendChild(newRecommendationCard);

    // Clear the form fields
    document.getElementById('recommendation-text').value = '';
    document.getElementById('recommendation-author').value = '';

    // Show the pop-up confirmation
    showPopup();
});

function showPopup() {
    const popup = document.getElementById('popup-confirmation');
    popup.style.display = 'block';

    // Hide the pop-up after 3 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}

function closePopup() {
    const popup = document.getElementById('popup-confirmation');
    popup.style.display = 'none';
}
