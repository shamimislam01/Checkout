let subtotal = 100;  // Initial cart total
let discount = 0;
let promoUsed = false;

function applyPromoCode() {
    if (promoUsed) {
        document.getElementById("promo-message").textContent = "Promo code already applied!";
        return;
    }

    let promoInput = document.getElementById("promo-input").value.trim();
    
    if (promoInput === "ostad10") {
        discount = subtotal * 0.10;  // 10% discount
        promoUsed = true;
        document.getElementById("promo-message").textContent = "Promo code applied! 10% discount.";
        document.getElementById("promo-message").style.color = "green";
    } else if (promoInput === "ostad5") {
        discount = subtotal * 0.05;  // 5% discount
        promoUsed = true;
        document.getElementById("promo-message").textContent = "Promo code applied! 5% discount.";
        document.getElementById("promo-message").style.color = "green";
    } else {
        document.getElementById("promo-message").textContent = "Invalid promo code!";
        document.getElementById("promo-message").style.color = "red";
        return;
    }

    let total = subtotal - discount;
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}
