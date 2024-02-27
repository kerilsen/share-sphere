const listingFormHandler = async (event) => {
  
    const material_name = document.querySelector('#material_name').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;
    const cost = document.querySelector('#cost').value;
    const availability = document.querySelector('input[name="availability"]:checked').value;
    const filename = document.getElementById("uploadedimage").src;
    const community_id = document.querySelector('#community_id').value;
  
    if (material_name && description && category && cost && availability && community_id) {
      const response = await fetch('/api/materials', {
        method: 'POST',
        body: JSON.stringify({ material_name, description, category, cost, availability, filename, community_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        console.log(material_name, description, category, cost, availability, filename, community_id);
        alert('Failed to create new listing.');
      }
    }
};

const deleteListing = async (id) => {
  try {
    const response = await fetch('/api/materials/' + id,  {
      method: 'DELETE'
    })

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete listing.');
    }
  } catch (error) {
    console.error('Delete error:', error);
    alert('An error occurred while deleting listing.');
  }
};

// Function to filter listings based on search query
const filterListings = (query) => {
  // Get all card elements representing listings
  const cards = document.querySelectorAll(".card");

  // Convert search query to lowercase for case-insensitive matching
  const searchQuery = query.toLowerCase();

  // Loop through each card element
  cards.forEach((card) => {
    // Get the text content of the card
    const cardText = card.textContent.toLowerCase();

    // Check if the card text contains the search query
    if (cardText.includes(searchQuery)) {
      // If the card matches the search query, display it
      card.style.display = "block";
    } else {
      // If the card does not match the search query, hide it
      card.style.display = "none";
    }
  });
};

// Add event listener to the search input field
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    filterListings(this.value);
  });
}