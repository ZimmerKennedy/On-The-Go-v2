export const DiagonalArrow = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <title />
        <g
          fill={props.fill}
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M18.7 12.4V5.3h-7.1" data-name="Right" />
          <path d="M5.3 18.7 17.1 6.9" />
        </g>
      </svg>
    );
  };