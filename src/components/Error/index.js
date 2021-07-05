import React from "react";

import "src/styles/error.scss";

function Error() {
    return (
        <section id="not-found">
            <div id="title">CarelyTeam</div>
            <div className="circles">
                <p>
                    404<br></br>
                    <small>PAGE NON TROUVEE</small>
                </p>
                <span className="circle big"></span>
                <span className="circle med"></span>
                <span className="circle small"></span>
            </div>
        </section>
    );
}

export default Error;
