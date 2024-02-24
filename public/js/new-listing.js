const listingFormHandler = async (event) => {
  
    const material_name = document.querySelector('#material_name').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;
    const cost = document.querySelector('#cost').value;
    const availability = document.querySelector('input[name="availability"]:checked').value;
    const filename = document.querySelector('#filename').value;
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