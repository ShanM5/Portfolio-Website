// header toggle

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect

let typed = new Typed('.auto-input',{
    strings: ['Software Engineer!', 'CS Major at Rutgers NB.', 'SWE Intern at Clocky.' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})

//active link state on scroll
let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function (){
    const scrollPos = this.window.scrollY + 20
    sections.forEach(sections =>{
        if(scrollPos > sections.offsetTop && scrollPos < (section.offsetTop + section.offsetTop)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
})

