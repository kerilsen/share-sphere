const postFormHandler = async (event) => {
  
    const title = document.querySelector('.post-title').value;
    const post_body = document.querySelector('.post-body').value;
  
    if (title && post_body) {
      const response = await fetch('/api/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, post_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/messageBoard');
      } else {
        alert('Failed to create new post.');
      }
    }
};

const deletePost = async (id) => {
  try {
    const response = await fetch('/api/posts/' + id,  {
      method: 'DELETE'
    })

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post.');
    }
  } catch (error) {
    console.error('Delete error:', error);
    alert('An error occurred while deleting post.');
  }
};