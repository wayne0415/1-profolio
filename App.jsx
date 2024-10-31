function Header() {
    return <div>jfkld;aijdg;iajdslfaldsfj;i</div>;
}

function App() {
    return (
        <>
            <h1>Hello, React!</h1>
            <p>這是一個使用 CDN 建立的 React 開發環境。</p>
            <Header />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
