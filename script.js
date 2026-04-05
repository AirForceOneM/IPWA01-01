document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { land: "Deutschland", firma: "Firma 1", jahr: 2025, emission: 1250 },
    { land: "Frankreich", firma: "Firma 2", jahr: 2024, emission: 1180 },
    { land: "Schweden", firma: "Firma 3", jahr: 2025, emission: 640 },
    { land: "Italien", firma: "Firma 4", jahr: 2024, emission: 890 },
    { land: "Spanien", firma: "Firma 5", jahr: 2025, emission: 760 },
    { land: "Portugal", firma: "Firma 6", jahr: 2024, emission: 540 },
    { land: "Niederlande", firma: "Firma 7", jahr: 2025, emission: 710 },
    { land: "Belgien", firma: "Firma 8", jahr: 2024, emission: 680 },
    { land: "Österreich", firma: "Firma 9", jahr: 2025, emission: 590 },
    { land: "Schweiz", firma: "Firma 10", jahr: 2024, emission: 560 },
    { land: "Polen", firma: "Firma 11", jahr: 2025, emission: 980 },
    { land: "Tschechien", firma: "Firma 12", jahr: 2024, emission: 830 },
    { land: "Norwegen", firma: "Firma 13", jahr: 2025, emission: 420 },
    { land: "Finnland", firma: "Firma 14", jahr: 2024, emission: 410 },
    { land: "Dänemark", firma: "Firma 15", jahr: 2025, emission: 450 },
    { land: "USA", firma: "Firma 16", jahr: 2024, emission: 1850 },
    { land: "Kanada", firma: "Firma 17", jahr: 2025, emission: 920 },
    { land: "Mexiko", firma: "Firma 18", jahr: 2024, emission: 970 },
    { land: "Brasilien", firma: "Firma 19", jahr: 2025, emission: 1120 },
    { land: "Argentinien", firma: "Firma 20", jahr: 2024, emission: 860 },
    { land: "China", firma: "Firma 21", jahr: 2025, emission: 2450 },
    { land: "Japan", firma: "Firma 22", jahr: 2024, emission: 1340 },
    { land: "Indien", firma: "Firma 23", jahr: 2025, emission: 2210 },
    { land: "Australien", firma: "Firma 24", jahr: 2024, emission: 1010 },
    { land: "Südafrika", firma: "Firma 25", jahr: 2025, emission: 890 }
  ];

  const searchInput = document.getElementById("search");
  const countrySelect = document.getElementById("country");
  const companySelect = document.getElementById("company");
  const yearSelect = document.getElementById("year");
  const searchBtn = document.getElementById("searchBtn");
  const resetBtn = document.getElementById("resetBtn");
  const tableBody = document.querySelector("#table tbody");
  const count = document.getElementById("count");
  const headers = document.querySelectorAll("#table th");

  let currentData = [...data];
  let sortDirection = true;

  function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = String(value);
    return cell;
  }

  function renderTable(rows) {
    tableBody.replaceChildren();

    rows.forEach(function (item) {
      const tr = document.createElement("tr");
      tr.appendChild(createCell(item.land));
      tr.appendChild(createCell(item.firma));
      tr.appendChild(createCell(item.jahr));
      tr.appendChild(createCell(item.emission));
      tableBody.appendChild(tr);
    });

    count.textContent = rows.length + " Datensätze angezeigt";
  }

  function populateFilters() {
    const countries = [...new Set(data.map(item => item.land))].sort((a, b) => a.localeCompare(b, "de"));
    const companies = [...new Set(data.map(item => item.firma))].sort((a, b) => a.localeCompare(b, "de", { numeric: true }));

    countries.forEach(function (country) {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });

    companies.forEach(function (company) {
      const option = document.createElement("option");
      option.value = company;
      option.textContent = company;
      companySelect.appendChild(option);
    });
  }

  function filterTable() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const countryValue = countrySelect.value;
    const companyValue = companySelect.value;
    const yearValue = yearSelect.value;

    currentData = data.filter(function (item) {
      const textMatch =
        item.land.toLowerCase().includes(searchValue) ||
        item.firma.toLowerCase().includes(searchValue) ||
        String(item.jahr).includes(searchValue) ||
        String(item.emission).includes(searchValue);

      const countryMatch = countryValue === "alle" || item.land === countryValue;
      const companyMatch = companyValue === "alle" || item.firma === companyValue;
      const yearMatch = yearValue === "alle" || String(item.jahr) === yearValue;

      return textMatch && countryMatch && companyMatch && yearMatch;
    });

    renderTable(currentData);
  }

  function resetTable() {
    searchInput.value = "";
    countrySelect.value = "alle";
    companySelect.value = "alle";
    yearSelect.value = "alle";
    currentData = [...data];
    renderTable(currentData);
    searchInput.focus();
  }

  function sortTable(index) {
    const sorted = [...currentData].sort(function (a, b) {
      const keys = ["land", "firma", "jahr", "emission"];
      const key = keys[index];

      const aValue = a[key];
      const bValue = b[key];

      let result;

      if (typeof aValue === "number" && typeof bValue === "number") {
        result = aValue - bValue;
      } else {
        result = String(aValue).localeCompare(String(bValue), "de", { numeric: true });
      }

      return sortDirection ? result : -result;
    });

    sortDirection = !sortDirection;
    currentData = sorted;
    renderTable(currentData);
  }

  // Button Events
  searchBtn.addEventListener("click", filterTable);
  resetBtn.addEventListener("click", resetTable);

  // 🔥 ENTER-TASTE (NEU)
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      filterTable();
    }
  });

  // Sortierung
  headers.forEach(function (header, index) {
    header.addEventListener("click", function () {
      sortTable(index);
    });
  });

  populateFilters();
  renderTable(currentData);
});