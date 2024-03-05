function getValue(id) {
    return (document.getElementById(id).value);
}

function checkCondition(condition, id, message) {
    if (condition == false) {
        document.getElementById(id).innerHTML = message;
        document.getElementById(id).style.color = "red";
    }
    else {
        document.getElementById(id).innerHTML = "";

    }
}

function checkLength(Ch, n) {
    return (Ch.length >= n);
}

function checkLengthTel(Ch, n) {
    return (Ch.length == n);
}

function checkEgal(Ch1, Ch2) {
    return (Ch1 == Ch2);
}

function checkSupEgal(a, n) {
    return (a >= n);
}

function checkSup(a, n) {
    return (a > n);
}

function generateId(T) {
    var max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (var i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }

        }
    }
    return (max);
}

function objectByKeyAndId(key, objId) {
    var objectTab = getFromLS(key);
    var objectFound;
    for (var i = 0; i < objectTab.length; i++) {
        if (objectTab[i].id == objId) {
            objectFound = objectTab[i];
            break;

        }

    }
    return (objectFound);
}
function getFromLS(key) {
    var Tab = JSON.parse(localStorage.getItem(key) || "[]");
    return Tab;
}

function generateHeader() {
    var connectedId = localStorage.getItem("connectedUser");
    var user = objectByKeyAndId("users", connectedId);
    var content = ``;
    // connected
    if (connectedId) {
        if (user.role == "owner") {
            content = `<ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="home.html" class="nav-link">Home</a></li>
            <li class="nav-item active"><a href="profile.html" class="nav-link">Hello Owner ${user.fn} </a></li>
            <li class="nav-item"><a href="dashboardOwner.html" class="nav-link">Dashboard</a></li>
            <li class="nav-item "><a href="addHouse.html" class="nav-link">Add House</a></li>
            <li class="nav-item "><a  class="nav-link" onclick="logout()"> Logout </a></li>
        </ul>`;
        } else if (user.role == "admin") {
            content = `<ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="home.html" class="nav-link">Home</a></li>
            <li class="nav-item active"><a href="profile.html" class="nav-link">Hello Admin ${user.fn} </a></li>
            <li class="nav-item"><a href="dashboardAdmin.html" class="nav-link">Dashboard</a></li>
            <li class="nav-item "><a  class="nav-link" onclick="logout()"> Logout </a></li>
        </ul>`;

        }
        else if (user.role == "client") {
            content = `<ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="home.html" class="nav-link">Home</a></li>
            <li class="nav-item active"><a href="profile.html" class="nav-link">Hello ${user.fn} </a></li>
            <li class="nav-item"><a href="basket.html" class="nav-link">Basket</a></li>
            <li class="nav-item"><a href="search.html" class="nav-link">Search</a></li>
            <li class="nav-item "><a  class="nav-link" onclick="logout()"> Logout </a></li>
        </ul>`;

        }
    } else {
        // not connected
        content = `<ul class="navbar-nav ml-auto">
        <li class="nav-item"><a href="home.html" class="nav-link">Home</a></li>
        <li class="nav-item "> <a href="signupOwner.html" class="nav-link">Owner</a> </li> 

        <li class="nav-item "> <a href="signupClient.html" class="nav-link"> Client</a> </li>
        <li class="nav-item active"><a href="login.html" class="nav-link">Login</a></li>
        <li class="nav-item"><a href="search.html" class="nav-link">Search</a></li>
    </ul>`;
    }
    document.getElementById("headerDiv").innerHTML = content;
}

function signupAdmin() {
    // getvalue
    var firstName = getValue("FNAdmin");
    var isFirstNameValid = checkLength(firstName, 3);
    checkCondition(isFirstNameValid, "FNErrorAdmin", "First name should have at least 3 caracters");
    // verification
    var lastName = getValue("LNAdmin");
    var isLastNameValid = checkLength(lastName, 4);
    checkCondition(isLastNameValid, "LNErrorAdmin", "Last name should have at least 4 caracters");

    var email = getValue("emailAdmin");
    var isEmailValid = checkLength(email, 10);
    checkCondition(isEmailValid, "adminEmailError", "Email should have at least 10 caracters");

    var tel = getValue("telAdmin");
    var isTelValid = checkLengthTel(tel, 8);
    checkCondition(isTelValid, "telErrorAdmin", "Phone number should have 8 caracters");
    var address = getValue("addressAdmin");

    var isAddressValid = checkLength(address, 4);
    checkCondition(isAddressValid, "addressErrorAdmin", "Address should have at least 4 caracters");

    var pwd = getValue("pwdAdmin");
    var isPwdValid = checkLength(pwd, 6);
    checkCondition(isPwdValid, "pwdErrorAdmin", "Password should have at least 6 caracters");



    if (isFirstNameValid && isLastNameValid && isPwdValid &&
        isTelValid && isEmailValid && isAddressValid) {
        // obj creation
        var usersTab = getFromLS("users");
        var user = {
            id: generateId(usersTab) + 1,
            fn: firstName,
            ln: lastName,
            email: email,
            tel: tel,
            address: address,
            pwd: pwd,
            role: "admin",
        };
        // save  
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }

}

function signup() {

    var firstName = getValue("firstName");
    var isFirstNameValid = checkLength(firstName, 3);
    checkCondition(isFirstNameValid, "firstNameError", "First name should have at least 3 caracters");

    var lastName = getValue("lastName");
    var isLastNameValid = checkLength(lastName, 4);
    checkCondition(isLastNameValid, "lastNameError", "Last name should have at least 4 caracters");

    var email = getValue("email");
    var isEmailValid = checkLength(email, 10);
    checkCondition(isEmailValid, "emailError", "Email should have at least 10 caracters");

    var tel = getValue("tel");
    var isTelValid = checkLengthTel(tel, 8);
    checkCondition(isTelValid, "telError", "Phone number should have 8 caracters");

    var address = getValue("address");
    var isAddressValid = checkLength(address, 4);
    checkCondition(isAddressValid, "addressError", "Address should have at least 4 caracters");

    var pwd = getValue("pwd");
    var isPwdValid = checkLength(pwd, 6);
    checkCondition(isPwdValid, "pwdError", "Password should have at least 6 caracters");

    var confirmPwd = getValue("confirmPwd");
    var isConfirmPwdValid = checkEgal(pwd, confirmPwd);
    checkCondition(isConfirmPwdValid, "confirmPwdError", "Please check your password");

    if (isConfirmPwdValid && isFirstNameValid && isLastNameValid && isPwdValid &&
        isTelValid && isEmailValid && isAddressValid) {
        var usersTab = getFromLS("users");

        var user = {
            id: generateId(usersTab) + 1,
            fn: firstName,
            ln: lastName,
            email: email,
            tel: tel,
            address: address,
            pwd: pwd,
            role: "client"

        };
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");

    }

}

function signupOwner() {

    var firstName = getValue("FNOwner");
    var isFirstNameValid = checkLength(firstName, 3);
    checkCondition(isFirstNameValid, "FNOwnerError", "First name should have at least 3 caracters");

    var lastName = getValue("LNOwner");
    var isLastNameValid = checkLength(lastName, 4);
    checkCondition(isLastNameValid, "LNOwnerError", "Last name should have at least 4 caracters");

    var email = getValue("emailOwner");
    var isEmailValid = checkLength(email, 10);
    checkCondition(isEmailValid, "ownerEmailError", "Email should have at least 10 caracters");

    var tel = getValue("telOwner");
    var isTelValid = checkLengthTel(tel, 8);
    checkCondition(isTelValid, "telOwnerError", "Phone number should have 8 caracters");

    var address = getValue("addressOwner");
    var isOwnerAddressValid = checkLength(address, 4);
    checkCondition(isOwnerAddressValid, "ownerAddressError", "Address should have at least 4 caracters");

    var pwd = getValue("pwdOwner");
    var isPwdValid = checkLength(pwd, 6);
    checkCondition(isPwdValid, "pwdOwnerError", "Password should have at least 6 caracters");

    var confirmPwd = getValue("confirmOwnerPwd");
    var isConfirmPwdValid = checkEgal(pwd, confirmPwd);
    checkCondition(isConfirmPwdValid, "confirmOwnerPwdError", "Please check your password");


    if (isConfirmPwdValid && isFirstNameValid && isLastNameValid && isPwdValid &&
        isTelValid && isOwnerAddressValid) {
        var usersTab = getFromLS("users");
        var user = {
            id: generateId(usersTab) + 1,
            fn: firstName,
            ln: lastName,
            email: email,
            tel: tel,
            address: address,
            pwd: pwd,
            role: "owner",
            statut: "not Valid",

        };
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}

function login() {

    var emailValue = getValue("emailValue");
    var pwdValue = getValue("pwdValue");
    var userFound;
    var usersTab = getFromLS("users");

    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == emailValue
            && usersTab[i].pwd == pwdValue) {
            userFound = usersTab[i];
            break;
        }
    }
    // user found
    if (userFound) {
        localStorage.setItem("connectedUser", userFound.id);
        if (userFound.role == "client") {
            location.replace("home.html");
        } else if (userFound.role == "owner") {
            if (userFound.statut == "not Valid") {
                document.getElementById("loginError").innerHTML = "Acount not yet verified!";
                document.getElementById("loginError").style.color = "red";
            }
            else if (userFound.statut == "Valid") {
                location.replace("dashboardOwner.html");
            }

        }
        else if (userFound.role == "admin") {
            location.replace("dashboardAdmin.html");
        }

    }

    else {
        // user not found
        document.getElementById("loginError").innerHTML = "Please check email/pwd";
        document.getElementById("loginError").style.color = "red";
    }

}

function logout() {
    localStorage.removeItem("connectedUser");
    location.replace("home.html");
}

function addHouse() {
    var name = getValue("houseValue");
    var isNameOk = checkLength(name, 4);
    checkCondition(isNameOk, "houseNameError", " The house name should have at least 4 caracters");

    var address = getValue("addressValue");
    var isAddressOk = checkLength(address, 4);
    checkCondition(isAddressOk, "houseAddressError", " The house address should have at least 4 caracters");
    var town = getValue("town");
    var isTownOk = checkLength(town, 4);
    checkCondition(isTownOk, "townError", " The house town should have at least 4 caracters");

    var houseDescription = getValue("houseDescriptionValue")
    var isDescriptionOk = checkLength(houseDescription, 10);
    checkCondition(isDescriptionOk, "houseDescriptionError", " The house description should have at least 10 caracters");

    var user = localStorage.getItem("connectedUser");

    if (isNameOk && isAddressOk && isDescriptionOk && isTownOk) {
        var housesTab = getFromLS("houses");
        // important to save the house id when moving to display house
        var houseId = getFromLS("displayedHouseId");
        var n = generateId(housesTab) + 1;
        var house = {
            id: n,
            houseName: name,
            houseAddress: address,
            town: town,
            rooms: 0,
            description: houseDescription,
            owner: user,

        }
        houseId = n;
        housesTab.push(house);
        localStorage.setItem("houses", JSON.stringify(housesTab));
        localStorage.setItem("displayedHouseId", houseId);
        location.replace("houseDetails.html");
    }
}

function addRoom() {
    var name = getValue("roomValue");
    var isNameOk = checkLength(name, 4);
    checkCondition(isNameOk, "roomNameError", " The room name should have at least 4 caracters");

    var beds = getValue("bedsValue");
    var isBedsOk = (checkSupEgal(beds, 1));
    checkCondition(isBedsOk, "bedsError", "The room should have at least 1 bed");

    var roomDescription = getValue("roomDescriptionValue")
    var isDescriptionOk = checkLength(roomDescription, 10);
    checkCondition(isDescriptionOk, "roomDescriptionError", " The room description should have at least 10 caracters");


    var price = getValue("price");
    var isPriceOk = (checkSup(price, 0));
    checkCondition(isPriceOk, "priceError", "Please check the price of the place in this room");

    var userId = localStorage.getItem("connectedUser");
    var houseId = localStorage.getItem("displayedHouseId");
    if (isNameOk && isBedsOk && isDescriptionOk) {
        newRoom(houseId);
        var roomsTab = getFromLS("rooms");
        var room = {
            id: generateId(roomsTab) + 1,
            roomName: name,
            beds: beds,
            price: price,
            description: roomDescription,
            owner: userId,
            house: houseId,

        }
        roomsTab.push(room);
        localStorage.setItem("rooms", JSON.stringify(roomsTab));
        location.replace("houseDetails.html");
    }


}
function newRoom(houseId) {
    var housesTab = getFromLS("houses");
    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].id == houseId) {
            housesTab[i].rooms = housesTab[i].rooms + 1;
            break;
        }
    }
    localStorage.setItem("houses", JSON.stringify(housesTab));
}

function displayHouses() {
    var housesTab = getFromLS("houses");
    var content = "";
    for (var i = 0; i < housesTab.length; i++) {
        content = content + `
        <div class="col-md-4 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated" style="margin-bottom: 10%;">
          <div class="d-block services-wrap text-center">
                <div class="media-body py-4 px-3">
                    <a href="houseDetails.html" class="block-20 rounded"
                        style="background-image: url('images/house.jpg');">
                           </a>
                    <div class="text p-2 text-center">
                     <div class="meta mb-2"></div>
                     
                        <h3 class="class="heading mb-2"> ${housesTab[i].houseName} </h3>
                        <p class=" mb-2">${housesTab[i].houseAddress} </p>
                        <p class=" mb-2"> Rooms: ${housesTab[i].rooms} </p>
                        <p>  ${housesTab[i].description} </p>
                        
                        <a class="btn btn-primary mb-0" style="color: white;" onclick="displayedHouse(${housesTab[i].id},${housesTab[i].owner})">Read more </a>
                       
                    </div>
                </div>
            </div>
        </div> `

    }
    document.getElementById("housesDiv").innerHTML = content;
}

function displayedHouse(id, owner) {
    localStorage.setItem("displayedHouseId", id);
    localStorage.setItem("displayedHouseOwner", owner);
    location.replace("houseDetails.html");

}
function displayEditBtn(connectedId, houseOwner) {
    var btn = ``;
    if (connectedId == houseOwner) {
        btn = ` <button class="btn btn-warning" onclick="Edit()">Edit</button>
      `
    }
}

function displayHouseDetails() {
    var housesTab = getFromLS("houses");
    var houseId = localStorage.getItem("displayedHouseId");

    var foundedHouse;
    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].id == houseId) {
            foundedHouse = housesTab[i];
            break;

        }
    }


    document.getElementById("houseName").innerHTML = foundedHouse.houseName;
    document.getElementById("houseAddress").innerHTML = foundedHouse.houseAddress;
    document.getElementById("houseTown").innerHTML = foundedHouse.town;
    document.getElementById("houseRooms").innerHTML = foundedHouse.rooms;
    document.getElementById("houseDescription").innerHTML = foundedHouse.description;

}
function checkRooms(rooms) {

    if (rooms < 5) {
        document.getElementById("roomsError").innerHTML = "";
        location.replace("addRoom.html")

    } else {
        document.getElementById("roomsError").innerHTML = "The house can have only 5 rooms";
        document.getElementById("roomsError").style.color = "red";
    }

}

function displayRooms() {
    var roomsTab = getFromLS("rooms");
    var selectedHouseId = localStorage.getItem("displayedHouseId");
    var selectedHouse = objectByKeyAndId("houses", selectedHouseId);
    var connectedUser = localStorage.getItem("connectedUser");
    var btn = ``;
    if (selectedHouse.owner == connectedUser) {
        btn = ` <a class="btn btn-primary mb-0 mt-0" style="color: white;" onclick="checkRooms(${selectedHouse.rooms})"> Add new room </a>  `;

    }
    var content = `<section class="row justify-content-center align-self-stretch px-4 " style="margin-bottom: 10%;">
    <div class="col-md-7 heading-section text-center ftco-animate">
        <h2>Our Rooms</h2>
        <span> ${btn}</span>
        <span id="roomsError"> </span> 
    </div>
    </section>
    <section class="ftco-section ftco-services">
    <div class="container">
        <div class="row">`

    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].house == selectedHouseId) {
            content = content + ` 
               <div class="col-md-4 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated" style="margin-bottom: 5%;">
                    <div class="d-block services-wrap text-center align-self-stretch">
                        <div class="img" style="background-image: url('images/room-4.jpg');"></div>
                        <div class="media-body py-4 px-3 ">
                        
                            <h3 class="class="heading "> ${roomsTab[i].roomName} </h3>                           
                            <p class="mb-0">  ${roomsTab[i].description} </p>                           
                            <p class=" mb-0"> Places: ${roomsTab[i].beds} </p>
                            <p class=" mb-4"> Price: ${roomsTab[i].price} DT/day </p>
                            <a class="btn btn-primary mb-0" style="color: white;" onclick="displayedRoom(${roomsTab[i].id})">Read more </a>
                           
                        </div>
                    </div>
                </div>
             `
        }
    }
    content = content + `</div>
                   </div>
              </section>`
    document.getElementById("roomsDiv").innerHTML = content;
}

function displayedRoom(id) {
    localStorage.setItem("displayedRoomId", id);
    location.replace("roomDetails.html");

}
function displayRoomDetails() {
    var roomsTab = getFromLS("rooms");
    var roomId = localStorage.getItem("displayedRoomId");
    var foundedRoom;
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id == roomId) {
            foundedRoom = roomsTab[i];
            break;

        }
    }


    document.getElementById("roomName").innerHTML = foundedRoom.roomName;
    document.getElementById("roomPrice").innerHTML = foundedRoom.price;
    document.getElementById("roomBeds").innerHTML = foundedRoom.beds;
    document.getElementById("roomDescription").innerHTML = foundedRoom.description;

}
function displayBookingBar() {
    var connectedUser = localStorage.getItem("connectedUser");
    var user = objectByKeyAndId("users", connectedUser);
    var content = ``;
    if (user.role == "client") {
        content = `<div style="background-color: #df5c9b4b;"
        class="rounded ftco-animate fadeInUp ftco-animated">
        <form action="#" class="appointment-form">
            <h3 class="mb-3 text-center " style="font-style: italic;">Book your room now
            </h3>
            <div class="d-flex">
                <div class="col-3">
                    <div class="form-group">
                        <div class="input-wrap">
                            <div class="icon"><span class="ion-md-calendar"></span>
                            </div>
                            <input type="text"
                                class="form-control appointment_date-check-in"
                                placeholder="Check-In" id="checkIn">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <div class="input-wrap">
                            <div class="icon"><span class="ion-md-calendar"></span>
                            </div>
                            <input type="text"
                                class="form-control appointment_date-check-out"
                                placeholder="Check-Out" id="checkOut">
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <div class="form-field">
                            <input type="number" class="form-control " placeholder="Persons"
                                id="persons">
                        </div>
                    </div>
                </div> 
                <div class="col-3">
                    <div class="form-group">
                        <a class="btn btn-primary py-3 px-4" onclick="bookRoom()">Book
                            Now</a>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div id="capacityError"></div>
                <div id="bookError"></div>
                <div id="availability"></div>
            </div>
        </form>
    </div>`
    }
    document.getElementById("bookingDiv").innerHTML = content;
}
function calculPeriod(checkIn, checkOut) {
    var date1 = new Date(checkIn);
    var date2 = new Date(checkOut);
    // calculate days difference by dividing total milliseconds in a day
    return days = ((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)) + 1;

}

function bookRoom() {

    var clientId = localStorage.getItem("connectedUser");

    var houseId = localStorage.getItem("displayedHouseId");
    var ownerId = localStorage.getItem("displayedHouseOwner");

    var checkIn = getValue("checkIn");
    var checkOut = getValue("checkOut");

    var roomId = localStorage.getItem("displayedRoomId");
    var room = objectByKeyAndId("rooms", roomId);
    var persons = getValue("persons");


    var days = calculPeriod(checkIn, checkOut)
    var totalPrice = (Number(room.price) * days);

    var isPersonsValid = (checkSupEgal(Number(room.beds), persons) && checkSupEgal(persons, 1));
    checkCondition(isPersonsValid, "capacityError", "Please check room capacity");
    var isBookingOk = checkRoomAvailability(checkIn, checkOut, roomId);

    if (isPersonsValid && isBookingOk) {
        var reservationsTab = getFromLS("reservations");

        var reservation = {
            id: generateId(reservationsTab) + 1,
            clientId: clientId,
            houseId: houseId,
            roomId: roomId,
            ownerId: ownerId,
            checkIn: checkIn,
            checkOut: checkOut,
            persons: persons,
            days: days,
            price: totalPrice

        };
        reservationsTab.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(reservationsTab));
        location.replace("basket.html");
    }

}

function checkRoomAvailability(checkIn, checkOut, roomId) {
    var reservationsTab = getFromLS("reservations");
    var bookFrom = new Date(checkIn);
    var bookTo = new Date(checkOut);
    var isBookOk = (bookFrom <= bookTo) && (bookFrom > Date.now());
    var isRoomAvailable = true;
    checkCondition(isBookOk, "bookError", "Please check your reservation date");

    if (!isBookOk) {
        return false;
    }

    for (var i = 0; i < reservationsTab.length; i++) {
        if (reservationsTab[i].roomId == roomId) {
            // room reserved (exists in reservationsTab)
            var reserved = objectByKeyAndId("reservations", reservationsTab[i].id);
            var reservedFrom = new Date(reserved.checkIn);
            var reservedTo = new Date(reserved.checkOut);
            isRoomAvailable = (reservedTo < bookFrom) || (bookTo < reservedFrom);
            checkCondition(isRoomAvailable, "availability", "Sorry the room is not available, choose another date or check another room");
            if (!isRoomAvailable) {
                return false;
            }
        }
    }

    return true;
}

function displayAdminUsers() {
    var Tab = getFromLS("users");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].role != "admin") {

            content = content + `<tr style="text-align: center;">
                                <td>${Tab[i].fn} ${Tab[i].ln}</td>
                                <td>${Tab[i].email}</td>
                                <td>${Tab[i].tel}</td>
                                <td>${Tab[i].role} </td>
                                <td>${Tab[i].statut} </td>
                                <td>${checkBtn(content, Tab[i])}</td>
                                </tr>`

        }
    }
    document.getElementById("usersAdminDiv").innerHTML = content;

}
function checkBtn(content, obj) {
    if (obj.statut == "not Valid") {
        content = `<button class="btn btn-danger" onclick="deleteUserByAdmin(${obj.id})" >Delete</button>
        <button class="btn btn-warning" onclick="validateOwner(${obj.id})">Validate</button>`

    }
    else if (obj.role == "client" || obj.statut == "Valid") {
        content = `<button class="btn btn-danger" onclick="deleteUserByAdmin(${obj.id})" >Delete</button>`
    }
    return content;
}
function validateOwner(id) {
    T = getFromLS("users");
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            T[i].statut = "Valid";
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(T));
    location.reload();
}
function deleteUserByAdmin(id) {
    var Tab = getFromLS("users");
    var pos = searchUserPos(id);
    var user = objectByKeyAndId("users", id);
    var houses = getFromLS("houses");
    var rooms = getFromLS("rooms");
    var reservations = getFromLS("reservations");

    if (user.role == "owner") {
        for (var i = 0; i < houses.length; i++) {
            if (houses[i].owner == id) {
                houses.splice(i, 1);
            }
        }
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].owner == id) {
                rooms.splice(i, 1);
            }
        }
        for (var i = 0; i < reservations.length; i++) {
            if (reservations[i].ownerId == id) {
                reservations.splice(i, 1);
            }
        }
 
    } else {
        if (user.role == "client") {
            for (var i = 0; i < reservations.length; i++) {
                if (reservations[i].clientId == id) {
                    reservations.splice(i, 1);
                }
            }
        }
    }
    Tab.splice(pos, 1);
    localStorage.setItem("houses", JSON.stringify(houses));
    localStorage.setItem("rooms", JSON.stringify(rooms));
    localStorage.setItem("reservations", JSON.stringify(reservations));
    localStorage.setItem("users", JSON.stringify(Tab));
    location.reload();
}
function searchUserPos(id) {
    var usersTab = getFromLS("users");
    var pos;
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            pos = i;
            break;
        }

    }
    return pos;
}
function search() {
    var houses = getFromLS("houses");
    var search = getValue("search");
    var content = ``;
    for (var i = 0; i < houses.length; i++) {
        if ((houses[i].houseName == search) || (houses[i].houseAddress == search)) {
            content = content + `
        <div class="col-4 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated" style="margin-bottom: 5%;">
            <div class="d-block services-wrap text-center align-self-stretch">
                <div class="media-body py-4 px-3">
                    <a href="houseDetails.html" class="block-20 rounded"
                        style="background-image: url('images/house.jpg');">
                           </a>
                    <div class="text p-2 text-center">
                     <div class="meta mb-2"></div>
                     
                        <h3 class="class="heading mb-2"> ${houses[i].houseName} </h3>
                        <p class=" mb-2">${houses[i].houseAddress} </p>
                        <p class=" mb-2"> Rooms: ${houses[i].rooms} </p>
                        <p>  ${houses[i].description} </p>
                        
                        <a class="btn btn-primary mb-0" style="color: white;" onclick="displayedHouse(${houses[i].id},${houses[i].owner})">Read more </a>
                       
                    </div>
                </div>
            </div>
        </div> `

        }
        content = content + `</div>`
    }
    if (content == ``) {
        content = `House Not Found...`;
    }
    document.getElementById("searchDiv").innerHTML = content;
}
function displayProfile() {
    var usersTab = getFromLS("users");
    var userId = localStorage.getItem("connectedUser");
    var foundedUser;
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == userId) {
            foundedUser = usersTab[i];
            break;

        }
    }

    document.getElementById("userFN").innerHTML = foundedUser.fn;
    document.getElementById("userLN").innerHTML = foundedUser.ln;
    document.getElementById("userEmail").innerHTML = foundedUser.email;
    document.getElementById("userTel").innerHTML = foundedUser.tel;
    document.getElementById("userAddress").innerHTML = foundedUser.address;

}
function editProfile() {
    var id = getFromLS("connectedUser");
    var user = objectByKeyAndId("users", id)
    var content = `<div>
     <form class="row contact_form mt-4 mb-2" action="#" method="post" novalidate="novalidate">
   
    <div class="col-md-12 form-group p_star">
        <input type="email" class="form-control"  id="newEmail" value="${user.email}" placeholder="">

    </div>
    
    <div class="col-md-12 form-group p_star">
        <input type="tel" class="form-control"  id="newTel" value="${user.tel}" placeholder="">
    </div>
    <div class="col-md-12 form-group p_star">
        <input type="tel" class="form-control"  id="newAddress" value="${user.address}" placeholder="">
    </div>
   

    <div class="col-md-12 form-group">
        <button type="submit" class="btn btn-primary" onclick="validateProfile(${id})">Validate</button>

    </div>
</form>
</div>`
    document.getElementById("editProfile").innerHTML = content;
}
function validateProfile(id) {
    var Tab = getFromLS("users");
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].id == id) {
            Tab[i].email = getValue("newEmail");
            Tab[i].tel = getValue("newTel");
            Tab[i].address = getValue("newAddress");
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(Tab));
    location.reload();

}
function displayAdminHouses() {
    var Tab = getFromLS("houses");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        var owner = objectByKeyAndId("users", Tab[i].owner)
        content = content + `<tr style="text-align: center;">
                                <td>${owner.fn} ${owner.ln}</td>
                                <td>${Tab[i].houseName}</td>
                                <td>${Tab[i].houseAddress} </td>
                                <td>${Tab[i].town}</td>
                                <td>${Tab[i].rooms} </td>
                                <td><button class="btn btn-danger" onclick=" deleteHousePosId (${i},${Tab[i].id})">Delete</button>
                               </td>
                            </tr>`

    }
    document.getElementById("housesAdminDiv").innerHTML = content;

}

function deleteHousePosId(pos, id) {
    var Tab = getFromLS("houses");
    var roomsTab = getFromLS("rooms");
    var reservationsTab = getFromLS("reservations");
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].house == id) {
            roomsTab.splice(i, 1);
        }
    }
    for (var i = 0; i < reservationsTab.length; i++) {
        if (reservationsTab[i].houseId == id) {
            reservationsTab.splice(i, 1);
        }
    }

    Tab.splice(pos, 1);
    localStorage.setItem("houses", JSON.stringify(Tab));
    localStorage.setItem("rooms", JSON.stringify(roomsTab));
    localStorage.setItem("reservations", JSON.stringify(reservationsTab));
    location.reload();
}

function displayAdminRooms() {
    var Tab = getFromLS("rooms");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        var owner = objectByKeyAndId("users", Tab[i].owner);
        var house = objectByKeyAndId("houses", Tab[i].house);
        content = content + `<tr style="text-align: center;">
                                <td>${owner.fn} ${owner.ln}</td>
                                <td>${house.houseName}</td>
                                <td>${Tab[i].roomName}</td>
                                <td>${Tab[i].beds} bed(s)</td>
                                <td>${Tab[i].price} DT/day</td>
                                <td><button class="btn btn-danger" onclick=" deleteRoomPosId (${i},${Tab[i].id})">Delete</button>
                               </td>
                            </tr>`

    }
    document.getElementById("roomsAdminDiv").innerHTML = content;

}
function deleteRoomPosId(pos, id) {
    var Tab = getFromLS("rooms");
    var reservationsTab = getFromLS("reservations");

    for (var i = 0; i < reservationsTab.length; i++) {
        if (reservationsTab[i].roomId == id) {
            reservationsTab.splice(i, 1);
        }
    }

    Tab.splice(pos, 1);
    localStorage.setItem("rooms", JSON.stringify(Tab));
    localStorage.setItem("reservations", JSON.stringify(reservationsTab));
    location.reload();
}


function displayAdminReservations() {
    var Tab = getFromLS("reservations");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        var owner = objectByKeyAndId("users", Tab[i].ownerId);
        var room = objectByKeyAndId("rooms", Tab[i].roomId);
        var house = objectByKeyAndId("houses", Tab[i].houseId);
        var client = objectByKeyAndId("users", Tab[i].clientId);
        content = content + `<tr style="text-align: center;">
                                <td>${client.fn} ${client.ln}</td>
                                <td>${Tab[i].checkIn}</td>
                                <td>${Tab[i].checkOut}</td>
                                <td>${Tab[i].persons} person(s)</td>
                                <td>${Tab[i].days} day(s)</td>
                                <td>${Tab[i].price} DT</td>
                                <td>${room.roomName} </td>
                                <td>${house.houseName} </td>
                                <td>${owner.fn} ${owner.ln}</td>
                                <td><button class="btn btn-danger" onclick=" deleteReservationPos(${i})">Delete</button>
                               </td>
                            </tr>`

    }
    document.getElementById("reservationsAdminDiv").innerHTML = content;

}
function deleteReservationPos(pos) {
    var Tab = getFromLS("reservations");
    Tab.splice(pos, 1);
    localStorage.setItem("reservations", JSON.stringify(Tab));
    location.reload();
}

function displayMyReservations() {
    var reservationsTab = getFromLS("reservations");
    var myId = getFromLS("connectedUser");
    var total = 0;
    var content = "";
    for (var i = 0; i < reservationsTab.length; i++) {
        if (reservationsTab[i].clientId == myId) {
            content = content + `<tr>
            <td>${objectByKeyAndId("houses", reservationsTab[i].houseId).houseName}</td>
            <td>${objectByKeyAndId("rooms", reservationsTab[i].roomId).roomName}</td>
            <td>${reservationsTab[i].checkIn}</td>
            <td>${reservationsTab[i].checkOut}</td>
            <td>${reservationsTab[i].days} day(s)</td>
            <td>${reservationsTab[i].price} DT</td>        
            <td><button class="btn btn-danger" onclick="deleteReservationPos(${i})">Delete</button>
            </tr>`

            total = total + (reservationsTab[i].price);

        }

    }

    var btn = `
    <div class="container row d-flex mt-4" >
    <h3 > Total: ${total} DT</h3> 
    <button   class="btn btn-success ml-4">Buy</button>
    </div>`;
    document.getElementById("basketDiv").innerHTML = content;
    document.getElementById("btnBuyDiv").innerHTML = btn;

}
function displayOwnerHouses() {
    var Tab = getFromLS("houses");
    var owner = getFromLS("connectedUser");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].owner == owner) {
            content = content + `<tr style="text-align: center;">
            <td>${Tab[i].houseName}</td>
            <td>${Tab[i].rooms} </td>
            <td>${Tab[i].houseAddress} </td>
            <td>${Tab[i].town}</td>
            <td><button class="btn btn-danger" onclick=" deleteHousePosId (${i},${Tab[i].id})">Delete</button>
            <button class="btn btn-warning" onclick=" editHouse(${Tab[i].id})">Edit</button>
            <button class="btn btn-primary" onclick=" checkRoomsDashboard(${Tab[i].id},${Tab[i].rooms})">Addroom</button>
            <span id="dashboardError"></span>
           </td>
        </tr>`
        }

    }
    document.getElementById("housesOwnerDiv").innerHTML = content;

}
function checkRoomsDashboard(id, rooms) {

    if (rooms < 5) {
        document.getElementById("dashboardError").innerHTML = "";
        localStorage.setItem("displayedHouseId", id)
        location.replace("addRoom.html")

    } else {
        document.getElementById("dashboardError").innerHTML = "The house can have only 5 rooms";
        document.getElementById("dashboardError").style.color = "red";
    }

}

function editHouse(id) {
    var house = objectByKeyAndId("houses", id)
    var content = `<div>
    <form class="row contact_form" action="#" method="post" novalidate="novalidate">
       
        <div class="col-md-12 form-group p_star">
            <input type="text" class="form-control"  id="newHouseName" value="${house.houseName}" placeholder="">
        </div>
        <div class="col-md-12 form-group p_star">
            <input type="text" class="form-control"  id="newAddress" value="${house.houseAddress}" placeholder="">
        </div>
        <div class="col-md-12 form-group p_star">
            <input type="text" class="form-control"  id="newTown" value="${house.town}" placeholder="">
        </div>
        <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-primary" onclick="validateHouse(${id})">Validate</button>

        </div>
    </form>
</div>`
    document.getElementById("editHouseDiv").innerHTML = content;
}
function validateHouse(id) {
    var Tab = getFromLS("houses");
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].id == id) {
            Tab[i].houseName = getValue("newHouseName");
            Tab[i].houseAddress = getValue("newAddress");
            Tab[i].town = getValue("newTown");
            break;
        }
    }

    localStorage.setItem("houses", JSON.stringify(Tab));
    location.reload();

}
function displayOwnerRooms() {
    var Tab = getFromLS("rooms");
    var owner = getFromLS("connectedUser");
    var content = ``;
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].owner == owner) {

            var house = objectByKeyAndId("houses", Tab[i].house);
            content = content + `<tr style="text-align: center;">                          
                                <td>${Tab[i].roomName}</td>
                                <td>${house.houseName}</td>
                                <td>${Tab[i].beds} bed(s)</td>
                                <td>${Tab[i].price} DT/day</td>
                                <td><button class="btn btn-danger" onclick=" deleteRoomPosId (${i},${Tab[i].id})">Delete</button>
                                <button class="btn btn-warning" onclick=" editRoom(${Tab[i].id})">Edit</button>
                               </td>
                            </tr>`
        }

    }
    document.getElementById("roomsOwnerDiv").innerHTML = content;

}

function editRoom(id) {
    var room = objectByKeyAndId("rooms", id)
    var content = `<div>
    <form class="row contact_form" action="#" method="post" novalidate="novalidate">
       
        <div class="col-md-12 form-group p_star">
            <input type="text" class="form-control"  id="newRoomName" value="${room.roomName}" placeholder="">
        </div>
        <div class="col-md-12 form-group p_star">
            <input type="number" class="form-control"  id="newCapacity" value="${room.beds}" placeholder="">
        </div>
        <div class="col-md-12 form-group p_star">
            <input type="text" class="form-control"  id="newPrice" value="${room.price} DT" placeholder="">
        </div>
        <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-primary" onclick="validateRoom(${id})">Validate</button>

        </div>
    </form>
</div>`
    document.getElementById("editRoomDiv").innerHTML = content;
}

function validateRoom(id) {
    var Tab = getFromLS("rooms");
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].id == id) {
            Tab[i].roomName = getValue("newRoomName");
            Tab[i].beds = getValue("newCapacity");
            Tab[i].price = getValue("newPrice");
            break;
        }
    }

    localStorage.setItem("rooms", JSON.stringify(Tab));
    location.reload();

}

function displayOwnerReservations() {
    var Tab = getFromLS("reservations");
    var owner = getFromLS("connectedUser");
    var content = "";
    for (var i = 0; i < Tab.length; i++) {
        if (Tab[i].ownerId == owner) {
            var room = objectByKeyAndId("rooms", Tab[i].roomId);
            var house = objectByKeyAndId("houses", Tab[i].houseId);
            var client = objectByKeyAndId("users", Tab[i].clientId);
            content = content + `<tr style="text-align: center;">
                                <td>${client.fn} ${client.ln}</td>
                                <td>${Tab[i].checkIn}</td>
                                <td>${Tab[i].checkOut}</td>
                                <td>${Tab[i].persons} person(s)</td>
                                <td>${Tab[i].days} day(s)</td>
                                <td>${Tab[i].price} DT</td>
                                <td>${room.roomName} </td>
                                <td>${house.houseName} </td>
                                <td><button class="btn btn-danger" onclick=" deleteReservationPos(${i})">Delete</button>
                               </td>
                            </tr>`

        }
    }
    document.getElementById("reservationsOwnerDiv").innerHTML = content;

}