
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let photo = document.getElementById("photo").value;

    // Validate the input fields
    if (!name || !email || !photo) {
        console.log("Please fill in all the fields");
        return;
    }

    // Display the input in the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Photo: " + photo);

    // Clear the form
    document.getElementById("userForm").reset();
});
