
            let slideIndex = 1;
            showSlides(slideIndex);
            n1showSlides(slideIndex);
            n2showSlides(slideIndex);
            n3showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            function n1plusSlides(n) {
                n1showSlides(slideIndex += n);
              }
              function n2plusSlides(n) {
                n2showSlides(slideIndex += n);
              }
              function n3plusSlides(n) {
                n3showSlides(slideIndex += n);
              }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            function n1currentSlide(n) {
                n1showSlides(slideIndex = n);
              }
              function n2currentSlide(n) {
                n2showSlides(slideIndex = n);
              }
              function n3currentSlide(n) {
                n3showSlides(slideIndex = n);
              }

            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            }
            function n1showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("n1mySlides");
                let dots = document.getElementsByClassName("n1dot");
                if (n > slides.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";  
                dots[slideIndex-1].className += " active";
              }

              function n2showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("n2mySlides");
                let dots = document.getElementsByClassName("n2dot");
                if (n > slides.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";  
                dots[slideIndex-1].className += " active";
              }

              function n3showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("n3mySlides");
                let dots = document.getElementsByClassName("n3dot");
                if (n > slides.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";  
                dots[slideIndex-1].className += " active";
              }
            