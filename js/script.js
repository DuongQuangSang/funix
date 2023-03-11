function checkMail() {
    const emailTrue = document.getElementById('email').value.toLocaleLowerCase();
    const emailFalse = document.getElementById('error');
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailTrue.match(regex);
    console.log('check', result);

    const clickInfo = document.querySelector('.click-info');
    const clickedInfo = document.querySelector('.clicked-info');
    const listIcon = document.querySelector('.list-icon');

    if (result) {
        clickInfo.style.display = 'none';
        clickedInfo.style.display = 'block';
        listIcon.style.display = 'flex';
        emailFalse.innerHTML = '';
    } else {
        emailFalse.style.color = 'red';
        emailFalse.innerHTML = 'Nhập email không đúng. Vui lòng nhập lại !';
    }
}


// const viewMore = document.querySelector('.view-more');
// const viewLess = document.querySelector('.view-less');
// const body = document.querySelector('.body');

// document.querySelectorAll('.view-more').forEach(item => {
//     item.addEventListener('click', event => {
//         item.classList.toggle('hide');//handle click
//     })
// })

// document.querySelectorAll('.view-less').forEach(item => {
//     item.addEventListener('click', event => {
//         item.classList.toggle('hide');//handle click
//     })
// })
// const viewLess = document.querySelector('.view-less');
// const body = document.querySelector('.body');

// console.log(viewMore);
// console.log(viewLess);
// console.log(body);

// function btnOpen() {
//     body.style.display = 'block';
//     viewLess.style.display = 'inline-block';
//     viewMore.classList.toggle('hide');
// }

// function btnClose() {
//     body.style.display = 'none';
//     viewLess.style.display = 'none';
//     viewMore.classList.toggle('hide');
// }

const coll = document.getElementsByClassName("view-more");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        // this.innerHTML = 'View Less';
        let pre = this.previousElementSibling;
        let next = this.nextElementSibling;
        // pre.style.display = "block";
        // let content = this.nextElementSibling;
        if (pre.style.display === "none") {
            // this.innerHTML = 'View More';
            pre.style.display = "block";
            // next.classList.toggle('show');
            // this.classList.toggle('hide');
            this.innerHTML = 'View Less';

        }
        else {
            // this.classList.toggle('show');
            this.innerHTML = 'View More';

            pre.style.display = "none";
            // next.classList.toggle('show');
        }
    });
}