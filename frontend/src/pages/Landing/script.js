const select = document.getElementById("postType");
const tweetInput = document.getElementById("tweetPostInput");
const imageInput = document.getElementById("imagePostInput");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Estupidez() {
    if (select.value === "Tweet") {
        tweetInput.style.display = "block";
        imageInput.style.display ="none";
    } else if(select.value === "Image"){
        tweetInput.style.display = "none";
        imageInput.style.display ="block";
    }
}
