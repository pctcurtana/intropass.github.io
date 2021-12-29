        var header = document.getElementById('header');
        var menu = document.getElementById('menu');
        menu.onclick = function() {
            var isClosed = header.clientHeight === 50;
            if (isClosed) {
                header.style.height = '100%';
            } else {
                header.style.height = '50px';
            }
        }
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            
            menuItem.onclick = function() {
                header.style.height = '50px';
            }
        };
        var typing = document.getElementById('typing');
        var typed = new Typed("#typing", {
            strings: ["Newbie", "Programming Learners", "Freelancer"],
            typeSpeed: 110,
            backSpeed: 70,
            loop: true
        });
        alert  ('ok')