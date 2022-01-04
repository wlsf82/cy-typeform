import './commands'

// Prevent cookie banner
const today = new Date()
Cypress.on("window:before:load", window => {
  window.document.cookie = `OptanonAlertBoxClosed=${today.toISOString()}`;
})