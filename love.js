// ==========================================
// MUSIC
// ==========================================

const bgMusic = new Audio("song.mp3.mpeg");

bgMusic.loop = true;
bgMusic.volume = 0.5;


// ==========================================
// MUSIC BUTTON
// ==========================================

function addMusicButton() {

    const oldButton = document.getElementById("musicBtn");

    if (oldButton) {
        oldButton.remove();
    }

    const musicButton = document.createElement("button");

    musicButton.id = "musicBtn";

    musicButton.innerHTML = "🎵";

    musicButton.title = "Play / Pause Music";


    musicButton.addEventListener("click", function () {

        if (bgMusic.paused) {

            bgMusic.play();

            musicButton.innerHTML = "🎵";

        } else {

            bgMusic.pause();

            musicButton.innerHTML = "🔇";

        }

    });


    document.body.appendChild(musicButton);
}


// ==========================================
// FIRST PAGE
// ==========================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


// ==========================================
// YES BUTTON
// ==========================================

if (yesBtn) {

    yesBtn.addEventListener("click", function () {

        // Start music only once
        if (bgMusic.paused) {

            bgMusic.play().catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

        }


        document.body.innerHTML = `

            <div class="beginning-page">

                <div class="heart">
                    ❤️
                </div>

                <h1>
                    Maybe This Is Our Beginning...
                </h1>

                <p>
                    We don't have a thousand memories together yet...
                </p>

                <p>
                    But maybe we can start creating them. ❤️
                </p>

                <p>
                    I don't know what the future holds,
                    but I know who I want beside me.
                </p>

                <button id="storyBtn">
                    Start Our Story ❤️
                </button>

            </div>

        `;


        addMusicButton();

    });

}


// ==========================================
// FIRST NO BUTTON
// ==========================================

if (noBtn) {

    noBtn.addEventListener("mouseover", function () {

        const maxX =
            window.innerWidth - noBtn.offsetWidth;

        const maxY =
            window.innerHeight - noBtn.offsetHeight;


        const x = Math.random() * maxX;

        const y = Math.random() * maxY;


        noBtn.style.position = "fixed";

        noBtn.style.left = x + "px";

        noBtn.style.top = y + "px";

    });

}


// ==========================================
// PAGE NAVIGATION
// ==========================================

document.addEventListener("click", function (event) {


    // ======================================
    // START OUR STORY
    // ======================================

    if (event.target.id === "storyBtn") {

        document.body.innerHTML = `

            <div class="photos-page">

                <div class="photo-intro">

                    <div class="small-heart">
                        ❤️
                    </div>

                    <h1>
                        A Little About You...
                    </h1>

                    <p>
                        Before I ask you something important,
                        I want you to see why you're so special to me.
                    </p>

                </div>


                <div class="photo-card">

                    <img src="love image1.jpeg" alt="Her photo">

                    <h2>
                        That smile... ❤️
                    </h2>

                    <p>
                        I don't know how you do it,
                        but that smile can make my day better.
                    </p>

                </div>


                <div class="photo-card">

                    <img src="love image2.jpeg" alt="Her photo">

                    <h2>
                        You're beautiful. 🌸
                    </h2>

                    <p>
                        And I hope you always know that.
                    </p>

                </div>


                <div class="photo-card">

                    <img src="love image3.jpeg" alt="Her photo">

                    <h2>
                        There's something about you... ✨
                    </h2>

                    <p>
                        Something that makes you different
                        from everyone else.
                    </p>

                </div>


                <div class="photo-card">

                    

                    <h2>
                        You have your own kind of magic. 💖
                    </h2>

                    <p>
                        And somehow, I want to know
                        every little part of it.
                    </p>

                </div>


                <div class="photo-card">

                    

                    <h2>
                        And this is the girl... ❤️
                    </h2>

                    <p>
                        I want to create countless
                        beautiful moments with.
                    </p>

                </div>


                <button id="questionBtn">
                    I Have Something To Ask You ❤️
                </button>

            </div>

        `;


        window.scrollTo(0, 0);


        // Music continues
        addMusicButton();

    }


    // ======================================
    // FINAL QUESTION
    // ======================================

    if (event.target.id === "questionBtn") {

        document.body.innerHTML = `

            <div class="proposal-page">

                <div class="big-heart">
                    ❤️
                </div>

                <h1>
                    One Last Question ❤️
                </h1>

                <p>
                    I don't have years of memories with you...
                </p>

                <p>
                    But I want to make them with you. ❤️
                </p>

                <h2>
                    Will you be a part of my story?
                </h2>

                <div class="proposal-buttons">

                    <button id="finalYes">
                        YES ❤️
                    </button>

                    <button id="finalNo">
                        NO 🙈
                    </button>

                </div>

            </div>

        `;


        addMusicButton();

    }


    // ======================================
    // FINAL YES
    // ======================================

    if (event.target.id === "finalYes") {

        document.body.innerHTML = `

            <div class="success-page">

                <div class="heart-animation">
                    ❤️
                </div>

                <h1>
                    YOU SAID YES! 🥹❤️
                </h1>

                <p>
                    And now...
                </p>

                <h2>
                    Our story officially begins. ✨
                </h2>

                <p>
                    I can't wait to create beautiful memories
                    with you. ❤️
                </p>

                <div class="love-text">
                    I LOVE YOU ❤️
                </div>

            </div>

        `;


        // Music continues
        addMusicButton();

    }


    // ======================================
    // FINAL NO
    // ======================================

    if (event.target.id === "finalNo") {

        alert("Are you sure? 🥺❤️");

    }

})