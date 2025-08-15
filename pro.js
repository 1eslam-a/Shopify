 document.querySelectorAll('.product-card').forEach((card) => {
      card.addEventListener('click', () => {
        const modal = document.getElementById('product-modal');
        const imgSrc = card.querySelector('img').src;
        document.getElementById('modal-image').src = imgSrc;

        document.getElementById('modal-image').alt = card.dataset.name;
        document.getElementById('modal-name').textContent = card.dataset.name;
        document.getElementById('modal-price').textContent = card.dataset.price;
        document.getElementById('modal-description').textContent = card.dataset.description;

        document.querySelectorAll('#modal-colors .color-option').forEach((el) =>
          el.classList.remove('selected')
        );
        document.querySelector('#modal-colors .color-option').classList.add('selected');
        document.getElementById('modal-sizes').value = '';

        modal.classList.add('show');
      });
    });

    document.getElementById('modal-close').addEventListener('click', () => {
      document.getElementById('product-modal').classList.remove('show');
    });

    document.querySelectorAll('#modal-colors .color-option').forEach((color) => {
      color.addEventListener('click', () => {
        document.querySelectorAll('#modal-colors .color-option').forEach((el) =>
          el.classList.remove('selected')
        );
        color.classList.add('selected');
      });
    });
    
    const hamburgerBtn = document.getElementById('hamburger-btn');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
 
});
