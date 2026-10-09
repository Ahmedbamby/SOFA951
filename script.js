document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.ttq?.track !== "function") return;

    const action = link.dataset.track;
    window.ttq.track(action === "whatsapp" ? "Contact" : "ClickButton", {
      content_name: action === "whatsapp" ? "WhatsApp" : "Phone Call",
    });
  });
});
