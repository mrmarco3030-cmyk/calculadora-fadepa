(() => {
  "use strict";

  const DEMO_COVERAGE = 10;

  const form = document.getElementById("calculatorForm");
  const product = document.getElementById("product");
  const surface = document.getElementById("surface");
  const coats = document.getElementById("coats");
  const waste = document.getElementById("waste");
  const wasteOutput = document.getElementById("wasteOutput");
  const resetButton = document.getElementById("resetButton");
  const resultEmpty = document.getElementById("resultEmpty");
  const resultContent = document.getElementById("resultContent");
  const litersResult = document.getElementById("litersResult");
  const surfaceResult = document.getElementById("surfaceResult");
  const coatsResult = document.getElementById("coatsResult");
  const wasteResult = document.getElementById("wasteResult");
  const connectionStatus = document.getElementById("connectionStatus");
  const installButton = document.getElementById("installButton");
  const toast = document.getElementById("toast");

  let deferredInstallPrompt = null;
  let toastTimer = null;

  const numberFormatter = new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 3200);
  }

  function updateWasteLabel() {
    wasteOutput.value = `${waste.value}%`;
    wasteOutput.textContent = `${waste.value}%`;
  }

  function updateConnectionStatus() {
    const online = navigator.onLine;
    connectionStatus.querySelector("span:last-child").textContent = online
      ? "Disponible sin conexión"
      : "Trabajando sin conexión";
  }

  function showResult({ total, area, coatCount, wastePercent }) {
    litersResult.textContent = numberFormatter.format(total);
    surfaceResult.textContent = `${numberFormatter.format(area)} m²`;
    coatsResult.textContent = coatCount;
    wasteResult.textContent = `${wastePercent}%`;
    resultEmpty.hidden = true;
    resultContent.hidden = false;
  }

  function hideResult() {
    resultContent.hidden = true;
    resultEmpty.hidden = false;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedProduct = product.value;
    const area = Number(surface.value);
    const coatCount = Number(coats.value);
    const wastePercent = Number(waste.value);

    if (!selectedProduct) {
      product.focus();
      showToast("Seleccioná un producto.");
      return;
    }

    if (!Number.isFinite(area) || area <= 0) {
      surface.focus();
      showToast("Ingresá una superficie mayor a cero.");
      return;
    }

    const baseLiters = (area * coatCount) / DEMO_COVERAGE;
    const total = baseLiters * (1 + wastePercent / 100);

    showResult({
      total: Math.ceil(total * 10) / 10,
      area,
      coatCount,
      wastePercent,
    });
  });

  resetButton.addEventListener("click", () => {
    form.reset();
    updateWasteLabel();
    hideResult();
    product.focus();
  });

  waste.addEventListener("input", updateWasteLabel);
  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showToast("Usá el menú del navegador y elegí “Agregar a pantalla principal”.");
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    installButton.hidden = true;
    showToast("Calculadora Fadepa instalada.");
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        await navigator.serviceWorker.register("./service-worker.js");
      } catch (error) {
        console.error("No se pudo registrar el service worker:", error);
      }
    });
  }

  updateWasteLabel();
  updateConnectionStatus();
})();
