document.addEventListener('DOMContentLoaded', function () {
  function updateProfilePreview() {
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const users = JSON.parse(localStorage.getItem('signupDataArray')) || [];

    const user = users.find(u => u.email.toLowerCase() === currentUserEmail?.toLowerCase());

    const nameEl = document.getElementById('profileNameDisplay');
    const picEl = document.getElementById('profilePic');

    if (user && nameEl && picEl) {
      nameEl.textContent = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown';
      picEl.src = user.profileImg || 'https://via.placeholder.com/80';
    } else if (nameEl && picEl) {
      nameEl.textContent = 'Unknown';
      picEl.src = 'https://via.placeholder.com/80';
    }
  }

  const offcanvas = document.getElementById('offcanvasNavbar');
  if (offcanvas) {
    updateProfilePreview();
    offcanvas.addEventListener('show.bs.offcanvas', updateProfilePreview);
  }
});