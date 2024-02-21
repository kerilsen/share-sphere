const commentFormHandler = async (event) => {
  
    const comment_body = document.querySelector('.comment-body').value;
  
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_body) {
      const response = await fetch('/api/comments/new', {
        method: 'POST',
        body: JSON.stringify({ comment_body, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create new comment.');
      }
    }
};