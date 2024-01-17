const checkboxStyle = `

  .checkbox-wrapper-30 .checkbox {
    --bg: #fff;
    --brdr: #d1d6ee;
    --brdr-actv: #1e2235;
    --brdr-hovr: #bbc1e1;
    --dur: calc((var(--size, 2)/2) * 0.6s);
    display: inline-block;
    width: calc(var(--size, 1) * 22px);
    position: relative;
  }
  .checkbox-wrapper-30 .checkbox:after {
    content: "";
    width: 100%;
    padding-top: 100%;
    display: block;
  }
  .checkbox-wrapper-30 .checkbox > * {
    position: absolute;
  }
  .checkbox-wrapper-30 .checkbox input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    background-color: var(--bg);
    border-radius: calc(var(--size, 1) * 4px);
    border: calc(var(--newBrdr, var(--size, 1)) * 1px) solid;
    color: var(--newBrdrClr, var(--brdr));
    outline: none;
    margin: 0;
    padding: 0;
    transition: all calc(var(--dur) / 3) linear;
  }
  .checkbox-wrapper-30 .checkbox input:hover,
  .checkbox-wrapper-30 .checkbox input:checked {
    --newBrdr: calc(var(--size, 1) * 2);
  }
  .checkbox-wrapper-30 .checkbox input:hover {
    --newBrdrClr: var(--brdr-hovr);
  }
  .checkbox-wrapper-30 .checkbox input:checked {
    --newBrdrClr: var(--brdr-actv);
    transition-delay: calc(var(--dur) /1.3);
  }
  .checkbox-wrapper-30 .checkbox input:checked + svg {
    --dashArray: 16 93;
    --dashOffset: 109;
  }
  .checkbox-wrapper-30 .checkbox svg {
    fill: none;
    left: 0;
    pointer-events: none;
    stroke: var(--stroke, var(--border-active));
    stroke-dasharray: var(--dashArray, 93);
    stroke-dashoffset: var(--dashOffset, 94);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    top: 0;
    transition: stroke-dasharray var(--dur), stroke-dashoffset var(--dur);
  }
  .checkbox-wrapper-30 .checkbox svg,
  .checkbox-wrapper-30 .checkbox input {
    display: block;
    height: 100%;
    width: 100%;
  }

  
`;

export default checkboxStyle;
