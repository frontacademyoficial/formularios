import { useState } from "react";

export default function InputPasswordToggle() {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="column-gap">
      <label htmlFor="password">Password toggle</label>

      <div style={{ position: "relative" }}>
        <input
          id="password"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Password toggle placeholder"
          type={showPassword ? "text" : "password"}
          value={value}
          style={{ paddingRight: "24px" }}
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            border: "none",
            background: "none",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-icon="eye"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="16px"
            width="16px"
          >
            <path
              fill="currentColor"
              d="M256 96c-96 0-192 96-192 192s96 192 192 192 192-96 192-192S352
            96 256 96zm0 320c-70.7 0-128-57.3-128-128s57.3-128
            128-128 128 57.3 128 128-57.3 128-128 128zm0-224c-35.3
            0-64 28.7-64 64s28.7 64 64 64 64-28.7
            64-64-28.7-64-64-64zm0 96c-17.7 0-32-14.3-32-32s14.3-32
            32-32 32 14.3 32 32-14.3 32-32 32z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
