import React from "react";

export default function Location() {

    const clientKey = "365256193216-gslrrms9cgrn2cif29qk1tf3giijhbfs.apps.googleusercontent.com";
    const keyAPI = "AIzaSyCwJ2WehsOmWpoDU85dAwffB4DtgVrscQk"; 

    return(
        <div className="location-div">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.413404769506!2d-81.38820198485833!3d28.467094198299975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c5f3d1bd909%3A0xe9351faee7247468!2sPlaza%20Tropical%20Supermarket!5e0!3m2!1sen!2sus!4v1670111821912!5m2!1sen!2sus" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
    )
}