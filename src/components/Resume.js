import React from "react";

function Resume() {
    return (
        <div>
            <iframe
                src={require("../assets/images/anders-resume.pdf")}
                width="1000px"
                height="500px"
                title="resume"
            ></iframe>
        </div>
    );
}

export default Resume;
