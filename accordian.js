document.querySelectorAll('.faq5_question').forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const heading = this.querySelector('.heading-4');
    const iconWrapper = this.querySelector('.faq5_icon-wrapper');

    // Close all open accordions and reset icons
    document.querySelectorAll('.faq5_answer').forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.style.opacity = 0;
        item.previousElementSibling.querySelector('.heading-4').style.transition = 'opacity 0.3s ease';
        item.previousElementSibling.querySelector('.heading-4').style.opacity = 1;
        item.previousElementSibling.querySelector('.faq5_icon-wrapper').style.transform = 'rotate(0deg)'; // Reset icon rotation
      }
    });

    // Close or open the clicked accordion
    if (answer.style.maxHeight) {
      // Closing the accordion
      answer.style.transition = 'max-height 0.4s ease-out, opacity 0.4s ease-out';
      answer.style.maxHeight = null;
      answer.style.opacity = 0;
      heading.style.transition = 'opacity 0.3s ease';
      heading.style.opacity = 1; // Make heading reappear
      iconWrapper.style.transition = 'transform 0.3s ease';
      iconWrapper.style.transform = 'rotate(0deg)'; // Rotate icon back
    } else {
      // Open the accordion
      answer.style.transition = 'max-height 0.4s ease-in, opacity 0.4s ease-in';
      answer.style.maxHeight = answer.scrollHeight + 'px'; // Smooth open
      answer.style.opacity = 1;
      heading.style.transition = 'opacity 0.3s ease';
      heading.style.opacity = 0; // Hide heading
      iconWrapper.style.transition = 'transform 0.3s ease';
      iconWrapper.style.transform = 'rotate(90deg)'; // Rotate icon to 90 degrees
    }
  });
});
</script>
