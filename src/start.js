import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <div style={styles.main}>
            <div>Dev Playground 😈</div>
        </div>
    );
};

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'dimgrey',
        color: 'antiquewhite'
    }
}

const main = document.querySelector('main');
document.querySelector('body').style.margin = 0;

ReactDOM.render(<App />, main);