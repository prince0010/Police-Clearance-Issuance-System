// //Loading Animation sa tanan og pag i click ang navbar
// $(window).on('load', () => {
//     $('#overlayWrapper').fadeOut(300);
//     $('#mainBody').fadeIn(300);
// });

// //Drawer Function
// const showDrawer = document.getElementById('bar');
// const hideDrawer = document.getElementById('drawerOverlay');

// showDrawer.addEventListener('click', () => {
//     document.getElementById('drawerSideBar').classList.toggle('active');
//     $('#drawerOverlay').fadeIn('fast');
// });

// hideDrawer.addEventListener('click', () => {
//     document.getElementById('drawerSideBar').classList.toggle('active');
//     $('#drawerOverlay').fadeOut('fast');
// });
const username = document.getElementById('uname')
const password = document.getElementById('psw')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if(username.value === '' || username.value == null){
        messages.push('Username is required')
        // mainPanel()
    }
    else if(password.value.length <= 4 || password.value.length >= 6){
        messages.push('Password Error, Try Again')
    }
    else if(password.value.length >= 20){
        messages.push('The password should not be exceed by 20 characters')
    }
    else if(username.value === "admin" && password.value === "admin"){
        // const notification = {
        //     title: 'Basic Notification',
        //     body: 'Notification from the Main process'
        // };
        // new Notification(notification).show();
        
            // console.log('Successfully login')
            messages.push('Successfully login')
    }
    else if(username.value !== "admin" && password.value === "admin"){
        messages.push('Wrong username, please try input again')
    }
    else if(username.value === "admin" && password.value !== "admin"){
        messages.push('Wrong password, please try input again')
    }
    //this is for if there's n error it will join the message that been set to 'ibulag ang words sa div'
    if(messages.length > 0 )
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ' ) 
    }
})