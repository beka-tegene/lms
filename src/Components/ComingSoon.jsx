const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <p style={{ fontSize: "2rem" }}>Coming Soon</p>
        <button
          style={{
            backgroundColor: "#378423",
            color: "#FFFFFF",
            padding: "7px 15px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
