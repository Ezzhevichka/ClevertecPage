fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((userData) => {
            let { name, picture, phone } = userData.results[0];

            let firstName = document.createElement("p");
            firstName.innerText = name.first;
            document.body.append(firstName);
            document.querySelector('.name').appendChild(firstName);

            let secondName = document.createElement("p");
            secondName.innerText = name.last;
            document.body.append(secondName);
            document.querySelector('.scname').appendChild(secondName);

            let image = document.createElement("img");
            image.setAttribute("src", picture.large);
            console.dir(image);
            document.body.append(image);
            document.querySelector('.photo').appendChild(image);

            let phoneUser = document.createElement("p");
            phoneUser.innerText = phone;
            document.body.append(phoneUser);
            document.querySelector('.phone').appendChild(phoneUser);
    });




