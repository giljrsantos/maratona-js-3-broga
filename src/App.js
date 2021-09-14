import React from  'react';

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">gilb</span>
                <span className="remainder">erto</span>
            </div>

            <div className="typed-keys">gsdfgilbgsfgs</div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>carro</li>
                    <li>profissional</li>
                    <li>Desenvolvedor</li>
                </ol>
            </div>
        </div>
    )
}

export default App;