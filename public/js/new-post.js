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
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create new post.');
      }
    }
};