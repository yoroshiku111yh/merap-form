import React from 'react';
import WrapperAppContainer from './containers/ContainerApp';
function App() {
    return (
        <article className="page__wrapper" >
            <section className="content__game">
                <div className="decor decor--6" >
                    <img src="./assets/images/decorations/decor-big-2.png" className="hidden-mb-width" />
                    <img src="./assets/images/decorations/decor-big-4.png" className="visible-mb-width" />
                </div>
                <div className="decor decor--7" >
                    <img src="./assets/images/decorations/decor-big-3.png" />
                </div>
                <WrapperAppContainer />
            </section>
        </article>
    );
}

export default App;
