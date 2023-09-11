// taking user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

const userSubject = () => {
  const subject =document.getElementById('subject');
  return subject.textContent;
}

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

  


  