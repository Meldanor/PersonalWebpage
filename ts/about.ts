import differenceInYears from "date-fns/differenceInYears";

export module About {
  export function init() {
    calculateYears();
  }

  function calculateYears() {
    // Date I started working on minecraft addons
    const start = new Date(2009, 1, 1);
    const years = differenceInYears(Date.now(), start);
    document.getElementById("years").innerText = years.toString();
  }
}

